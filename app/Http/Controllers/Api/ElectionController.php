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
        return ElectionResource::collection(Election::paginate(4));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
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
        $election = Election::FindOrFail($id);

        $election->update([
            'election_name' => $request->election_name,
            'election_image' => $request->election_image,
        ]);

        return response()->json(new ElectionResource($election), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $election = Election::FindOrFail($id);

        $election->delete();

        return response()->json(null, 204);
    }
}
