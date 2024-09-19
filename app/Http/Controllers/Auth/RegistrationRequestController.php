<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;

class RegistrationRequestController extends Controller
{
    public function index()
    {
        $requests = RegistrationRequest::where('status', 'pending')->get();
        return inertia('Admin/RegistrationRequests', ['requests' => $requests]);
    }

    public function approve(RegistrationRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'usertype' => $request->usertype,
            'status' => 'approved',
        ]);

        $request->update(['status' => 'approved']);

        return redirect()->back()->with('info', 'User approved successfully');
    }

    public function reject(RegistrationRequest $request)
    {
        $request->update(['status' => 'rejected']);

        return redirect()->back()->with('info', 'User rejected successfully');
    }
}
