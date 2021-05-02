<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Candidate;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CandidateControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_election_has_many_candidates()
    {
        $candidate = Candidate::factory()->create();


        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $candidate->elections);
    }

    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_candidates()
    {




        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "/api/candidates");

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
    public function can_return_all_candidates()
    {


        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "/api/all/candidates");

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
                ]
            ]);
    }

    /**
     *
     * @test
     */
    public function user_cant_create_a_election_candidate()
    {

        $faker = Factory::create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('POST', "api/candidates", [
            'firstname' => $firstname = $faker->firstName,
            'lastname' => $lastname = $faker->lastName,
            'birthdate' => $birthdate = $faker->date($format = 'Y-m-d', $max = 'now'),
            'street_address' => $street_address = $faker->streetAddress,
            'city' => $city = $faker->city,
            'district' => $district = $faker->state,
            'gender' => $gender = $faker->randomElement($array = array('male', 'female')),
        ]);

        $response->assertStatus(403)
            ->assertJson(['message' => 'Forbidden']);
    }


    /**
     *
     * @test
     */
    public function admin_can_create_a_election_candidate()
    {

        $faker = Factory::create();

        $response = $this->actingAs($this->create('User', ['is_admin' => true], false), 'api')->json('POST', "api/candidates", [
            'firstname' => $firstname = $faker->firstName,
            'lastname' => $lastname = $faker->lastName,
            'birthdate' => $birthdate = $faker->date($format = 'Y-m-d', $max = 'now'),
            'street_address' => $street_address = $faker->streetAddress,
            'city' => $city = $faker->city,
            'district' => $district = $faker->state,
            'gender' => $gender = $faker->randomElement($array = array('male', 'female')),
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
            'id',
            'firstname',
            'lastname',
            'birthdate',
            'street_address',
            'city',
            'district',
            'gender',
            'created_at',
        ])
        ->assertJson([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender,
        ]);

        $this->assertDatabaseHas('candidates', [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender,
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_a_404_if_candidate_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/candidates/-1');

        $response->assertStatus(404);
    }




    /**
     * @test
     */
    public function can_return_a_candidate()
    {
        $candidate = $this->create('Candidate');

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "api/candidates/$candidate->id");

        $response->assertStatus(200)
        ->assertExactJson([
            'id' => $candidate->id,
            'firstname' => $candidate->firstname,
            'lastname' => $candidate->lastname,
            'birthdate' => $candidate->birthdate,
            'street_address' => $candidate->street_address,
            'city' => $candidate->city,
            'district' => $candidate->district,
            'gender' => $candidate->gender,
            'created_at' => (string)$candidate->created_at
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_candidate_we_want_to_update_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', 'api/candidate/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function user_cant_update_a_candidate()
    {
        $candidate = $this->create('Candidate');

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', "api/candidates/$candidate->id", [
            'firstname' => $candidate->firstname.'_updated',
            'lastname' => $candidate->lastname.'_updated',
            'birthdate' => $candidate->birthdate,
            'street_address' => $candidate->street_address.'_updated',
            'city' => $candidate->city.'_updated',
            'district' => $candidate->district.'_updated',
            'gender' => $candidate->gender.'_updated',
        ]);

        $response->assertStatus(403)
            ->assertJson(['message' => 'Forbidden']);
    }

    /**
     * @test
     */
    public function admin_can_update_a_candidate()
    {
        $candidate = $this->create('Candidate');
        $election = $this->create('Election');

        $response = $this->actingAs($this->create('User', ['is_admin' => true], false), 'api')->json('PUT', "api/candidates/$candidate->id", [
            'firstname' => $candidate->firstname.'_updated',
            'lastname' => $candidate->lastname.'_updated',
            'birthdate' => $candidate->birthdate,
            'street_address' => $candidate->street_address.'_updated',
            'city' => $candidate->city.'_updated',
            'district' => $candidate->district.'_updated',
            'gender' => $candidate->gender.'_updated',
        ]);

        $response->assertStatus(200)
        ->assertExactJson([
            'id' => $candidate->id,
            'firstname' => $candidate->firstname.'_updated',
            'lastname' => $candidate->lastname.'_updated',
            'birthdate' => $candidate->birthdate,
            'street_address' => $candidate->street_address.'_updated',
            'city' => $candidate->city.'_updated',
            'district' => $candidate->district.'_updated',
            'gender' => $candidate->gender.'_updated',
            'created_at' => (string)$candidate->created_at
        ]);

        $this->assertDatabaseHas('candidates', [
            'id' => $candidate->id,
            'firstname' => $candidate->firstname.'_updated',
            'lastname' => $candidate->lastname.'_updated',
            'birthdate' => $candidate->birthdate,
            'street_address' => $candidate->street_address.'_updated',
            'city' => $candidate->city.'_updated',
            'district' => $candidate->district.'_updated',
            'gender' => $candidate->gender.'_updated',
            'photo' => null,
            'created_at' => (string)$candidate->created_at,
            'updated_at' => (string)$candidate->updated_at
        ]);
    }


    /**
     * @test
     */
    public function will_fail_with_404_if_candidate_we_want_to_delete_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', 'api/candidates/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function user_cant_delete_candidate()
    {
        $candidate = $this->create('Candidate');

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', "/api/candidates/$candidate->id");

        $response->assertStatus(403)
            ->assertJson(['message' => 'Forbidden']);
    }

    /**
     * @test
     */
    public function admin_can_delete_candidate()
    {
        $candidate = $this->create('Candidate');

        $response = $this->actingAs($this->create('User', ['is_admin' => true], false), 'api')->json('DELETE', "/api/candidates/$candidate->id");

        $response->assertStatus(204)->assertSee(null);

        $this->assertDatabaseMissing('candidates', ['id' => $candidate->id]);
    }


    /**
     * @test
     */
    public function can_return_a_collection_of_searched_paginated_candidates()
    {


        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "/api/search/candidates/asd");

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
}
