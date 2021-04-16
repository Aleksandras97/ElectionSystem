<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @return JsonResponse
     */
    public function showLoginUser(): JsonResponse
    {
        $user = auth()->user();
        return response()->json(new UserResource($user), 201);
    }
}
