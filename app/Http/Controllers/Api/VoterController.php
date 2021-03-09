<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Voter as VoterResource;
use App\Http\Resources\VoterCollection;
use App\Models\Voter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VoterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
//        return new VoterCollection(Voter::paginate());
        return VoterResource::collection(Voter::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {


        $voter = Voter::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender
        ]);

        return response()->json(new VoterResource($voter), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        $voter = Voter::findOrFail($id);

        return \response()->json(new VoterResource($voter));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $voter = Voter::findOrFail($id);

        $voter->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender
        ]);

        return \response()->json(new VoterResource($voter));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $voter = Voter::findOrFail($id);

        $voter->delete();

        return \response()->json(null, 204);
    }
}
