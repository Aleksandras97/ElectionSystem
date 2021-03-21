<?php

namespace Tests\Feature\Http\Controllers\Api;

use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class VoterControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function non_authenticated_user_cannot_access_the_following_endpoints_for_the_voter_api()
    {
        $index = $this->json('GET', 'api/voters');
        $index->assertStatus(401);

        $store = $this->json('POST', 'api/voters');
        $store->assertStatus(401);

        $show = $this->json('GET', 'api/voters/-1');
        $show->assertStatus(401);

        $update = $this->json('PUT', 'api/voters/-1');
        $update->assertStatus(401);

        $delete = $this->json('DELETE', 'api/voters/-1');
        $delete->assertStatus(401);
    }

    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_voters()
    {

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/voters');

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
                'current_page', 'last_page', 'from', 'to',
                'path', 'per_page', 'total'
            ]
        ]);



    }


    /**
     * @test
     */
    public function can_create_a_voter()
    {
        $faker = Factory::create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('POST', '/api/voters', [
            'firstname' => $firstname = $faker->firstName,
            'lastname' => $lastname = $faker->lastName,
            'birthdate' => $birthdate = $faker->date($format = 'Y-m-d', $max = 'now'),
            'street_address' => $street_address = $faker->streetAddress,
            'city' => $city = $faker->city,
            'district' => $district = $faker->state,
            'gender' => $gender = $faker->randomElement($array = array ('male','female'))
        ]);


        $response->assertJsonStructure([
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
            'gender' => $gender
        ])
        ->assertStatus(201);

        $this->assertDatabaseHas('voters', [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_a_404_if_voter_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/voters/-1');

        $response->assertStatus(404);
    }

    /**
     *
     * @test
     */
    public function can_return_a_voter()
    {
        //Given
        $voter = $this->create('Voter');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "api/voters/$voter->id");
        //Then
        $response->assertStatus(200)->assertExactJson([
            'id' => $voter->id,
            'firstname' => $voter->firstname,
            'lastname' => $voter->lastname,
            'birthdate' => $voter->birthdate,
            'street_address' => $voter->street_address,
            'city' => $voter->city,
            'district' => $voter->district,
            'gender' => $voter->gender,
            'created_at' => (string)$voter->created_at
        ]);
        Log::info($response->getContent());
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_voter_we_want_to_update_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', 'api/voters/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_update_a_voter()
    {
        //Given
        $voter = $this->create('Voter');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', "api/voters/$voter->id", [
            'firstname' => $voter->firstname.'_updated',
            'lastname' => $voter->lastname.'_updated',
            'street_address' => $voter->street_address.'_updated',
            'city' => $voter->city.'_updated',
            'district' => $voter->district.'_updated',
            'gender' => $voter->gender.'_updated',
        ]);
        //Then
        $response->assertStatus(200)->assertExactJson([
            'id' => $voter->id,
            'firstname' => $voter->firstname.'_updated',
            'lastname' => $voter->lastname.'_updated',
            'birthdate' => $voter->birthdate,
            'street_address' => $voter->street_address.'_updated',
            'city' => $voter->city.'_updated',
            'district' => $voter->district.'_updated',
            'gender' => $voter->gender.'_updated',
            'created_at' => (string)$voter->created_at
        ]);

        $this->assertDatabaseHas('voters', [
            'id' => $voter->id,
            'firstname' => $voter->firstname.'_updated',
            'lastname' => $voter->lastname.'_updated',
            'birthdate' => $voter->birthdate,
            'street_address' => $voter->street_address.'_updated',
            'city' => $voter->city.'_updated',
            'district' => $voter->district.'_updated',
            'gender' => $voter->gender.'_updated',
            'created_at' => (string)$voter->created_at,
            'updated_at' => (string)$voter->updated_at
        ]);


    }

    /**
     * @test
     */
    public function will_fail_with_404_if_voter_we_want_to_delete_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', 'api/voters/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_delete_a_voter()
    {
        //Given
        $voter = $this->create('Voter');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', "api/voters/$voter->id");

        $response->assertStatus(204)->assertSee(null);

        $this->assertDatabaseMissing('voters', ['id' => $voter->id]);


    }

}
