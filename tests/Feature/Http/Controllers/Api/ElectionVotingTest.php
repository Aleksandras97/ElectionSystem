<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Election;
use App\Models\User;
use Carbon\Carbon;
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
    public function user_can_vote_in_a_election_on_the_same_date()
    {

        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);
        $candidate->election()->associate($election);
        $candidate->save();

        $response = $this->actingAs($user, 'api')->json('POST', 'api/vote', [
            'candidate_id' => $candidate->id,
            'password' => 'secret'
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('election_user', [
            'election_id' => $election->id,
            'is_voted' => 1,
            'user_id' => $user->id,
            'candidate_id' => $candidate->id,
        ]);
    }

    /**
     * @test
     */
    public function user_cant_vote_in_a_election_not_on_the_same_date_as_today()
    {

        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', [], false);
        $candidate->election()->associate($election);
        $candidate->save();

        $response = $this->actingAs($user, 'api')->json('POST', 'api/vote', [
            'candidate_id' => $candidate->id,
            'password' => 'secret'
        ]);

        $response->assertStatus(403)
            ->assertJson(['message' => 'Election is over']);
    }

    /**
     * @test
     */
    public function user_cant_vote_in_a_election_with_wrong_password()
    {

        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);
        $candidate->election()->associate($election);
        $candidate->save();

        $response = $this->actingAs($user, 'api')->json('POST', 'api/vote', [
            'candidate_id' => $candidate->id,
            'password' => 'secrett'
        ]);

        $response->assertStatus(403)
            ->assertJson(['message' => 'Wrong password']);
    }

    /**
     * @test
     */
    public function can_get_if_user_voted_in_a_election()
    {

        $user = $this->create('User', ['is_admin' => true], false);

        $election = $this->create('Election', [], false);

        $response1 = $this->actingAs($user, 'api')->json('POST', 'api/voted', [
            'election_id' => 1,
        ]);

        $response1->assertStatus(200)
            ->assertJson(['voted' => false]);
    }


}
