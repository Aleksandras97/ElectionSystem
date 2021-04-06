<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Election;
use App\Models\User;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ElectionVotingTest extends TestCase
{

    use RefreshDatabase;
    /**
     * @test
     */
    public function user_can_create_a_vote_in_a_election()
    {

        $user = User::factory()->create();
        $election = Election::factory()->create();

        $response = $this->json('POST', 'api/userElection', [
            'election_id' => $election_id = $election->id,
            'user_id' => $user_id = $user->id
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('election_user', [
            'election_id' => $election_id,
            'user_id' => $user_id
        ]);
    }
}
