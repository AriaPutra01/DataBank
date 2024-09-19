<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    protected $attributes = [
        ['data' => 'name', 'type' => 'text', 'header' => 'Nama'],
        ['data' => 'email', 'type' => 'text', 'header' => 'Email'],
        ['data' => 'usertype', 'type' => 'select', 'options' => ['admin', 'supervisor', 'user'], 'header' => 'Role'],
        // ['data' => 'password', 'type' => 'text', 'header' => 'Password'],
    ];

    public function index()
    {
        $users = User::latest()->paginate(10);

        return inertia('Admin/UserControl', [
            'attributes' => $this->attributes,
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'usertype' => 'required|string|in:admin,suspervisor,user',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'usertype' => $request['usertype'],
            'password' => Hash::make($data['password']),
        ]);

        return redirect()->route('UserRekening.index')->with('info', 'User berhasil ditambahkan!');
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'usertype' => 'required|string|in:admin,suspervisor,user',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        if ($data['password']) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']); // Jangan update password jika tidak ada input
        }

        $user->update($data);

        return redirect()->route('UserRekening.index')->with('info', 'User berhasil diperbarui!');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('UserRekening.index')->with('info', "User berhasil dihapus!");
    }
}
