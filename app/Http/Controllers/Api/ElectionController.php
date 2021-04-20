<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Election;
use App\Http\Resources\Election as ElectionResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class ElectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return ElectionResource::collection(Election::orderBy('election_date', 'desc')->paginate(4));
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
            'election_date' => ['required'],
            'election_name' => ['required'],
        ]);


        if ($request->user()->cannot('create', Election::class)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $election = Election::create([
            'election_date' => $request->election_date,
            'election_name' => $request->election_name,
            'election_image' => $request->election_image,
        ]);

        return response()->json(new ElectionResource($election), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $election = Election::findOrFail($id);

        return response()->json(new ElectionResource($election), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'election_date' => ['required'],
            'election_name' => ['required'],
        ]);

        $election = Election::FindOrFail($id);

        if ($request->user()->cannot('update', $election)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }


        $election->update([
            'election_name' => $request->election_name,
            'election_date' => $request->election_date,
            'election_image' => $request->election_image,
        ]);

        return response()->json(new ElectionResource($election), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(Request $request, $id): JsonResponse
    {
        $election = Election::findOrFail($id);

        if ($request->user()->cannot('delete', $election)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $election->delete();

        return response()->json(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $val
     * @return AnonymousResourceCollection
     */
    public function search($val): AnonymousResourceCollection
    {
        $election = Election::where('election_name', 'like', '%'.$val.'%')->paginate(4);

        return ElectionResource::collection($election);
    }
}
