<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Pastikan Anda memiliki model User

class UserSeeder extends Seeder
{
    public function run()
    {
        // Membuat akun admin
        User::create([
            'name' => 'Pengguna Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt('12345678'),
            'usertype' => 'admin',
        ]);

        // Membuat akun supervisor
        User::create([
            'name' => 'Pengguna Supervisor',
            'email' => 'supervisor@mail.com',
            'password' => bcrypt('12345678'),
            'usertype' => 'supervisor',
        ]);

        // Membuat akun user
        User::create([
            'name' => 'Pengguna User',
            'email' => 'user@mail.com',
            'password' => bcrypt('12345678'),
            'usertype' => 'user',
        ]);
    }
}
