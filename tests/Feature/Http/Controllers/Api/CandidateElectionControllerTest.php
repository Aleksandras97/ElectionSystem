<?php

namespace Tests\Feature\Http\Controllers\Api;

use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CandidateElectionControllerTest extends TestCase
{

    use RefreshDatabase;

    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_election_candidates()
    {

        $candidate1 = $this->create('Candidate', [], false);
        $candidate2 = $this->create('Candidate', [], false);
        $candidate3 = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);

        $election->candidates()->syncWithoutDetaching([$candidate1->id, $candidate2->id, $candidate3->id]);


        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "/api/elections/{$election->id}/candidates");

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'firstname',
                        'lastname',
                        'birthdate',
                        'street_address',
                        'city',
                        'district',
                        'gender',
                        'created_at',
                    ]
                ],
                'links' => ['first', 'last', 'prev', 'next'],
                'meta' => [
                    'current_page', 'from', 'last_page', 'links',
                    'path', 'per_page','to', 'total'
                ]
            ]);
    }

    /**
     * @test
     */
    public function can_add_a_candidate_to_election()
    {

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);


        $response = $this->actingAs($this->create('User', ['is_admin' => true], false), 'api')->json('POST', "/api/elections/{$election->id}/candidates", [
            'candidate_id' => $candidate->id,
        ]);



        $response->assertStatus(201);

        $this->assertDatabaseHas('candidate_election', [
            'candidate_id' => $candidate->id,
            'election_id' => $election->id,
            'vote_counter' => 0,
        ]);
    }


    /**
     * @test
     */
    public function can_delete_a_candidate_from_election()
    {

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);


        $election->candidates()->syncWithoutDetaching($candidate->id);


        $response = $this->actingAs($this->create('User', ['is_admin' => true], false), 'api')->json('DELETE', "/api/elections/{$election->id}/candidates/{$candidate->id}", [
            'candidate_id' => $candidate->id,
        ]);

        $response->assertStatus(204);

        $this->assertDatabaseMissing('candidate_election', [
            'candidate_id' => $candidate->id,
            'election_id' => $election->id,
            'vote_counter' => 0,
        ]);
    }

}
