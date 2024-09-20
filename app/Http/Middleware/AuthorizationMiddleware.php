<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthorizationMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()) {
            if ($request->user()->usertype === 'admin') {
                return $next($request);
            } elseif ($request->user()->usertype === 'supervisor') {
                if ($request->is('registration-requests') || $request->is('user/*') || $request->isMethod('delete') && $request->is('rekening/*')) {
                    return redirect('/dashboard')->with('error', 'Anda tidak punya hak akses.');
                }
                return $next($request);
            } elseif ($request->user()->usertype === 'user') {
                if ($request->is('rekening') || $request->is('rekening/*')) {
                    return $next($request);
                }
            }
        }

        return redirect('/dashboard')->with('error', 'Anda tidak punya hak akses.');
    }
}
