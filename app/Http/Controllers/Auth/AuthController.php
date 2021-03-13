<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function store(Request $request): JsonResponse
    {

        $credentials = $request->validate([
            'email' => 'email|required',
            'password' => 'required',
        ]);

        if (!auth::attempt($credentials))
        {
            return response()->json(['message' => 'Invalid credentials']);
        }
        $token = auth()->user()->createToken('authToken')->accessToken;
        return response()->json(['token' => $token]);
    }
}
