<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Http\Resources\Candidate as CandidateResource;
use App\Models\Election;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
        return CandidateResource::collection(Candidate::orderBy('firstname', 'desc')->paginate(4));
    }

    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function all(): AnonymousResourceCollection
    {
        return CandidateResource::collection(Candidate::orderBy('firstname', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param Election $election
     * @return JsonResponse
     */
    public function store(Request $request, Election $election): JsonResponse
    {
        $request->validate([
            'firstname' => ['required'],
            'lastname' => ['required'],
            'birthdate' => ['required'],
            'street_address' => ['required'],
            'city' => ['required'],
            'district' => ['required'],
            'gender' => ['required'],
        ]);

        if ($request->user()->cannot('create', Candidate::class)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $candidate = Candidate::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender,
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
        
        $request->validate([
            'firstname' => ['required'],
            'lastname' => ['required'],
            'birthdate' => ['required'],
            'street_address' => ['required'],
            'city' => ['required'],
            'district' => ['required'],
            'gender' => ['required'],
        ]);


        if ($request->user()->cannot('update', $candidate)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $candidate->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'district' => $request->district,
            'gender' => $request->gender,
        ]);

        return response()->json(new CandidateResource($candidate));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $candidate
     * @return JsonResponse
     */
    public function destroy(Request $request, $candidate): JsonResponse
    {
        $candidate = Candidate::findOrFail($candidate);

        if ($request->user()->cannot('delete', $candidate)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $candidate->delete();

        return response()->json(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Election $election
     * @param $val
     * @return AnonymousResourceCollection
     */
    public function search($val): AnonymousResourceCollection
    {
        $candidates = Candidate::where('firstname', 'like', '%'.$val.'%')->paginate(4);
        return CandidateResource::collection($candidates);
    }
}
