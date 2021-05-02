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

        $election->candidates()->syncWithoutDetaching($candidate->id);

        $response = $this->actingAs($user, 'api')->json('POST', "api/elections/$election->id/vote", [
            'candidate_id' => $candidate->id,
            'password' => 'secret'
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('election_user', [
            'election_id' => $election->id,
            'is_voted' => 1,
            'user_id' => $user->id,
        ]);
    }

    /**
     * @test
     */
    public function user_cant_vote_in_a_election_not_on_the_same_date_as_today()
    {

        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::yesterday()], false);

        $election->candidates()->syncWithoutDetaching($candidate->id);

        $response = $this->actingAs($user, 'api')->json('POST', "api/elections/$election->id/vote", [
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

        $election->candidates()->syncWithoutDetaching($candidate->id);

        $response = $this->actingAs($user, 'api')->json('POST', "api/elections/$election->id/vote", [
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
        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);

        $election->candidates()->syncWithoutDetaching($candidate->id);

        $response1 = $this->actingAs($user, 'api')->json('POST', 'api/voted', [
            'election_id' => $election->id,
        ]);

        $response1->assertStatus(200)
            ->assertJson(['voted' => false]);
    }

    /**
     * @test
     */
    public function can_get_if_user_not_voted_in_a_election()
    {
        $user = $this->create('User', [], false);

        $candidate = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);

        $election->candidates()->syncWithoutDetaching($candidate->id);

        $this->actingAs($user, 'api')->json('POST', "api/elections/$election->id/vote", [
            'candidate_id' => $candidate->id,
            'password' => 'secret'
        ]);

        $response1 = $this->actingAs($user, 'api')->json('POST', 'api/voted', [
            'election_id' => $election->id,
        ]);

        $response1->assertStatus(200)
            ->assertJson(['voted' => true]);
    }

    /**
     * @test
     */
    public function can_get_election_results()
    {
        $user1 = $this->create('User', [], false);
        $user2 = $this->create('User', [], false);

        $candidate1 = $this->create('Candidate', [], false);
        $candidate2 = $this->create('Candidate', [], false);
        $candidate3 = $this->create('Candidate', [], false);
        $election = $this->create('Election', ['election_date' => Carbon::now()], false);

        $election->candidates()->syncWithoutDetaching([$candidate1->id, $candidate2->id, $candidate3->id]);

        $this->actingAs($user1, 'api')->json('POST', "api/elections/$election->id/vote", [
            'candidate_id' => $candidate2->id,
            'password' => 'secret'
        ]);

        $this->actingAs($user2, 'api')->json('POST', "api/elections/$election->id/vote", [
            'candidate_id' => $candidate1->id,
            'password' => 'secret'
        ]);

        $response = $this->actingAs($user1, 'api')->json('GET', "api/results/$election->id");

        $response->assertStatus(200)
            ->assertJsonStructure([
                    '*' => [
                        'firstname',
                        'vote_counter',
                    ]
                ]
            );
    }


}
