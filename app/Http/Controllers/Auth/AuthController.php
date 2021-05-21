<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Exception;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{



    public function login(Request $request)
    {
        $request->validate([
            'firstname' => ['required'],
            'password' => ['required'],
        ]);

        if(Auth::attempt([
            'firstname' => $request->firstname,
            'password' => $request->password,
        ])){

            $user = auth()->user();
            $responseArray = [];
            $responseArray['access_token'] = $user->createToken('api-application')->accessToken;
            $responseArray['name'] = $user->firstname;
            return response()->json($responseArray);
        } else {
            return response()->json(['error' => 'Username or password is incorrect'], 401);
        }
    }

    public function logout(): JsonResponse
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json(['message' => 'Logged out successfully']);
    }
}
