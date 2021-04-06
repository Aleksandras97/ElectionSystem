<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Candidate;
use App\Models\Election;
use App\Models\User;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ElectionControllerTest extends TestCase
{

    use RefreshDatabase;

    /**
     * @test
     */
    public function a_election_has_many_candidates()
    {
        $election = Election::factory()->create();
        $candidate = Candidate::factory()->create(['entry_id' => $election->id]);

        //Method 1: A candidate exists in a election's candidate collections.
        $this->assertTrue($election->candidates->contains($candidate));

        //Method 2: Count that a election candidates collection exists.
//        $this->assertEquals(1, $election->candidates->count());

        // Method 3: candidate are related to election and is a collection instance.
//        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $election->candidates);
    }

    /**
     * @test
     */
    public function a_election_belongs_to_many_voters()
    {
        $user = User::factory()->create();
//        $election = Election::factory()->create();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $user->elections);
    }


    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_elections()
    {
        $response = $this->json('GET', 'api/elections');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'election_date',
                        'election_name',
                        'election_image',
                        'created_at',
                    ]
                ],
                'links' => ['first', 'last', 'prev', 'next'],
                'meta' => [
                    'current_page', 'last_page', 'from', 'to',
                    'path', 'per_page', 'total'
                ]
            ]);
    }

    /**
     * A basic feature test example.
     *
     * @test
     */
    public function can_create_an_election()
    {
        $faker = Factory::create();

        $response = $this->json('POST', 'api/elections', [
            'election_date' => $election_date = $faker->date($format = 'Y-m-d', $max = 'now'),
            'election_name' => $election_name = $faker->catchPhrase,
            'election_image' => $election_image = $faker->name,
        ]);
//        Log::info(1, get);
        $response->assertStatus(201)
            ->assertJsonStructure([
                'id',
                'election_date',
                'election_name',
                'election_image',
                'created_at',
        ])
        ->assertJson([
            'election_date' => $election_date,
            'election_name' => $election_name,
            'election_image' => $election_image,
        ]);

        $this->assertDatabaseHas('elections', [
            'election_date' => $election_date,
            'election_name' => $election_name,
            'election_image' => $election_image,
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_election_is_not_found()
    {
        $response = $this->json('GET', 'api/elections/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_return_a_election()
    {
        $election = $this->create('Election');

        $response = $this->json('GET', "api/elections/$election->id");

        $response->assertStatus(200)
            ->assertExactJson([
                'id' => $election->id,
                'election_date' => $election->election_date,
                'election_name' => $election->election_name,
                'election_image' => $election->election_image,
                'created_at' => (string)$election->created_at,
            ]);
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_election_we_want_to_update_is_not_found()
    {
        $response = $this->json('PUT', 'api/elections/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_update_an_election()
    {
        $election = $this->create('Election');

        $response = $this->json('PUT', "api/elections/$election->id", [
            'election_name' => $election->election_name.'_updated',
            'election_image' => $election->election_image.'_updated',
        ]);

        $response->assertStatus(200)
        ->assertExactJson([
            'id' => $election->id,
            'election_date' => $election->election_date,
            'election_name' => $election->election_name.'_updated',
            'election_image' => $election->election_image.'_updated',
            'created_at' => (string)$election->created_at,
        ]);

        $this->assertDatabaseHas('elections', [
            'id' => $election->id,
            'election_date' => $election->election_date,
            'election_name' => $election->election_name.'_updated',
            'election_image' => $election->election_image.'_updated',
            'created_at' => (string)$election->created_at,
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_election_we_want_to_delete_is_not_found()
    {
        $response = $this->json('DELETE', 'api/elections/-1');

        $response->assertStatus(404);
    }


    /**
     * @test
     */
    public function can_delete_an_election()
    {
        $election = $this->create('Election');

        $response = $this->json('DELETE', "api/elections/$election->id");

        $response->assertStatus(204)->assertSee(null);

        $this->assertDatabaseMissing('elections', ['id' => $election->id]);
    }


}
