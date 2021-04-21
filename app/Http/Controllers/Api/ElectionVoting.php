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
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function isVoted(Request $request): JsonResponse
    {
        $election = Election::findOrFail($request->election_id);

//        dd($election->users);
        $user = auth()->user();
        $target = $election->users->find($user);
//        dd($target);
        if (!$target){
            return response()->json(['voted' => false]);
        }
        return response()->json(['voted' => true]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function results($id): JsonResponse
    {
//        dd($id);
        $results = DB::select("select c.firstname, v.votecnt
            from candidates c
            left join (select candidate_id, COUNT(user_id) votecnt from election_user group by candidate_id) v on v.candidate_id = c.id
            left join election_user v1 on v1.candidate_id = c.id and v1.user_id = " . (auth()->user()->getAuthIdentifier()) . "
            left join users u on u.id = v1.user_id
            where c.entry_id = {$id}
        ");
//        dd($results);

        return response()->json($results);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'candidate_id' => ['required'],
            'password' => ['required'],
        ]);

        $candidate = Candidate::findOrFail($request->candidate_id);
        $election = $candidate->election;
        $user = auth()->user();
        $date = Carbon::parse($election->election_date);

        if ($date->isToday()){
            if(Hash::check($request->password, $user->getAuthPassword())) {

                $election->users()->attach($user, ['is_voted' => true, 'candidate_id' => $request->candidate_id]);

                return response()->json([],201);
            }

            return response()->json(['message' => 'Wrong password'],403);
        }
        return response()->json(['message' => 'Election is over'],403);
//

//        ;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
