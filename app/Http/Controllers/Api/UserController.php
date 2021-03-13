<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
            'password' => $request->password,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender
        ]);

        return response()->json(new UserResource($user), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param $user
     * @return JsonResponse
     */
    public function show($user): JsonResponse
    {
        $user = User::findOrFail($user);
        return response()->json(new UserResource($user));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  $user
     * @return JsonResponse
     */
    public function update(Request $request, $user): JsonResponse
    {
        $user = User::findOrFail($user);

        $user->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender
        ]);

        return response()->json(new UserResource($user));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param   $user
     * @return JsonResponse
     */
    public function destroy($user): JsonResponse
    {
        $user = User::findOrFail($user);

        $user->delete();

        return response()->json(null, 204);
    }
}
