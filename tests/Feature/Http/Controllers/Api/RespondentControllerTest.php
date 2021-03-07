<?php

namespace Tests\Feature\Http\Controllers\Api;

use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class RespondentControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function non_authenticated_user_cannot_access_the_following_endpoints_for_the_respondent_api()
    {
        $index = $this->json('GET', 'api/respondents');
        $index->assertStatus(401);

        $store = $this->json('POST', 'api/respondents');
        $store->assertStatus(401);

        $show = $this->json('GET', 'api/respondents/-1');
        $show->assertStatus(401);

        $update = $this->json('PUT', 'api/respondents/-1');
        $update->assertStatus(401);

        $delete = $this->json('DELETE', 'api/respondents/-1');
        $delete->assertStatus(401);
    }

    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_respondents()
    {
        $respondent1 = $this->create('Respondent');
        $respondent2 = $this->create('Respondent');
        $respondent3 = $this->create('Respondent');

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/respondents');
        Log::info($response->getContent());
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
    public function can_create_a_respondent()
    {
        $faker = Factory::create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('POST', '/api/respondents', [
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

        $this->assertDatabaseHas('respondents', [
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
    public function will_fail_with_a_404_if_respondent_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/respondents/-1');

        $response->assertStatus(404);
    }

    /**
     *
     * @test
     */
    public function can_return_a_respondent()
    {
        //Given
        $respondent = $this->create('Respondent');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "api/respondents/$respondent->id");
        //Then
        $response->assertStatus(200)->assertExactJson([
            'id' => $respondent->id,
            'firstname' => $respondent->firstname,
            'lastname' => $respondent->lastname,
            'birthdate' => $respondent->birthdate,
            'street_address' => $respondent->street_address,
            'city' => $respondent->city,
            'district' => $respondent->district,
            'gender' => $respondent->gender,
            'created_at' => (string)$respondent->created_at
        ]);
        Log::info($response->getContent());
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_respondent_we_want_to_update_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', 'api/respondents/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_update_a_respondent()
    {
        //Given
        $respondent = $this->create('Respondent');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', "api/respondents/$respondent->id", [
            'firstname' => $respondent->firstname.'_updated',
            'lastname' => $respondent->lastname.'_updated',
            'street_address' => $respondent->street_address.'_updated',
            'city' => $respondent->city.'_updated',
            'district' => $respondent->district.'_updated',
            'gender' => $respondent->gender.'_updated',
        ]);
        //Then
        $response->assertStatus(200)->assertExactJson([
            'id' => $respondent->id,
            'firstname' => $respondent->firstname.'_updated',
            'lastname' => $respondent->lastname.'_updated',
            'birthdate' => $respondent->birthdate,
            'street_address' => $respondent->street_address.'_updated',
            'city' => $respondent->city.'_updated',
            'district' => $respondent->district.'_updated',
            'gender' => $respondent->gender.'_updated',
            'created_at' => (string)$respondent->created_at
        ]);

        $this->assertDatabaseHas('respondents', [
            'id' => $respondent->id,
            'firstname' => $respondent->firstname.'_updated',
            'lastname' => $respondent->lastname.'_updated',
            'birthdate' => $respondent->birthdate,
            'street_address' => $respondent->street_address.'_updated',
            'city' => $respondent->city.'_updated',
            'district' => $respondent->district.'_updated',
            'gender' => $respondent->gender.'_updated',
            'created_at' => (string)$respondent->created_at,
            'updated_at' => (string)$respondent->updated_at
        ]);


    }

    /**
     * @test
     */
    public function will_fail_with_404_if_respondent_we_want_to_delete_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', 'api/respondents/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_delete_a_respondent()
    {
        //Given
        $respondent = $this->create('Respondent');
        //When
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', "api/respondents/$respondent->id");

        $response->assertStatus(204)->assertSee(null);

        $this->assertDatabaseMissing('respondents', ['id' => $respondent->id]);


    }

}
