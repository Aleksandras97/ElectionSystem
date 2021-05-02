<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Election;
use App\Models\User;
use App\Models\Candidate;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ElectionVoting extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function isVoted(Request $request): JsonResponse
    {
        $election = Election::findOrFail($request->election_id);

        $user = auth()->user();
        $target = $election->users->find($user);

        if (!$target){
            return response()->json(['voted' => false]);
        }
        return response()->json(['voted' => true]);

    }

    /**
     * Display a results.
     *
     * @param $id
     * @return JsonResponse
     */
    public function results($id): JsonResponse
    {
        $results = DB::select("select c.firstname, v.vote_counter
            from candidates c
            left join candidate_election v on v.candidate_id = c.id
            where v.election_id = {$id}
        ");

        return response()->json($results);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param $election
     * @return JsonResponse
     */
    public function store(Request $request, $election): JsonResponse
    {
        $request->validate([
            'candidate_id' => ['required'],
            'password' => ['required'],
        ]);


        $candidate_id = Candidate::findOrFail($request->candidate_id);
        $election = Election::findOrFail($election);
        $user = auth()->user();
        date_default_timezone_set('Europe/Vilnius');
        $date = Carbon::parse($election->election_date);


        if ($date->isToday()){
            if(Hash::check($request->password, $user->getAuthPassword())) {

                $election->users()->attach($user, ['is_voted' => true]);

                foreach ($election->candidates as $candidate) {
                    if ($candidate->id == $candidate_id->id) {

                        $candidate->pivot->where('candidate_id', $candidate_id->id)->increment('vote_counter');
                    }
                }

                return response()->json([],201);
            }

            return response()->json(['message' => 'Wrong password'],403);
        }
        return response()->json(['message' => 'Election is over'],403);
    }
}
