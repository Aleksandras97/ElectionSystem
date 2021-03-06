<?php

namespace Tests\Feature\Http\Controllers\Api;

use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class RespondentControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @test
     */
    public function can_create_a_respondent()
    {
        $faker = Factory::create();

        $response = $this->json('POST', '/api/respondents', [
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
        $response = $this->json('GET', 'api/respondents/-1');

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
        $response = $this->json('GET', "api/respondents/$respondent->id");
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
            'created_at' => (string)$respondent->created_at,
            'updated_at' => (string)$respondent->updated_at
        ]);
    }


}
