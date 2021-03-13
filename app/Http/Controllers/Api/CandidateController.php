<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Http\Resources\Candidate as CandidateResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return CandidateResource::collection(Candidate::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $candidate = Candidate::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender,
            'entry_id' => $request->entry_id
        ]);

        return response()->json(new CandidateResource($candidate), 201);

    }

    /**
     * Display the specified resource.
     *
     * @param $candidate
     * @return JsonResponse
     */
    public function show($candidate): JsonResponse
    {
        $candidate = Candidate::findOrFail($candidate);

        return response()->json(new CandidateResource($candidate));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $candidate
     * @return JsonResponse
     */
    public function update(Request $request, $candidate): JsonResponse
    {
        $candidate = Candidate::findOrFail($candidate);

        $candidate->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender,
            'entry_id' => $request->entry_id,
        ]);

        return response()->json(new CandidateResource($candidate));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $candidate
     * @return JsonResponse
     */
    public function destroy($candidate): JsonResponse
    {
        $candidate = Candidate::findOrFail($candidate);

        $candidate->delete();

        return response()->json(null, 204);
    }
}
