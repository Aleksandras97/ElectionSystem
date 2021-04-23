<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Candidate as CandidateResource;
use App\Models\Candidate;
use App\Models\Election;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CandidateElectionController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param $id
     * @return AnonymousResourceCollection
     */
    public function index($id): AnonymousResourceCollection
    {
        $election = Election::findOrFail($id);
        $candidates = $election->candidates;
        return CandidateResource::collection(Candidate::whereIn('id', $candidates->pluck('id'))->paginate(4));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function store(Request $request, $id): JsonResponse
    {
        $election = Election::findOrFail($id);

        $request->validate([
            'candidate_id' => 'required',
        ]);

        $election->candidates()->syncWithoutDetaching($request->candidate_id);

        return response()->json([],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $election
     * @param $candidate
     * @return JsonResponse
     */
    public function destroy($election, $candidate): JsonResponse
    {
        $election = Election::findOrFail($election);
        $candidate = Candidate::findOrFail($candidate);

        $election->candidates()->detach($candidate);

        return response()->json(null, 204);
    }

}
