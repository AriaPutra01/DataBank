<?php

use App\Http\Controllers\Auth\RegistrationRequestController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RekeningController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthorizationMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Rekening;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $totalRekening = Rekening::count();
    $totalActive = Rekening::where('status', 'Active')->count();
    return Inertia::render('Dashboard', [
        'totalRekening' => $totalRekening,
        'totalActive' => $totalActive,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', AuthorizationMiddleware::class])->group(function () {
    Route::resource('rekening', RekeningController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', AuthorizationMiddleware::class])->group(function () {
    Route::get('/user-rekening', [UserController::class, 'index'])->name('UserRekening.index');
    Route::post('/user-rekening', [UserController::class, 'store'])->name('UserRekening.store');
    Route::put('/user-rekening/{user}', [UserController::class, 'update'])->name('UserRekening.update');
    Route::delete('/user-rekening/{user}', [UserController::class, 'destroy'])->name('UserRekening.destroy');
});

Route::middleware(['auth', AuthorizationMiddleware::class])->group(function () {
    Route::get('/registration-requests', [RegistrationRequestController::class, 'index'])->name('registration-requests.index');
    Route::post('/registration-requests/{request}/approve', [RegistrationRequestController::class, 'approve'])->name('registration-requests.approve');
    Route::post('/registration-requests/{request}/reject', [RegistrationRequestController::class, 'reject'])->name('registration-requests.reject');
});

require __DIR__ . '/auth.php';
