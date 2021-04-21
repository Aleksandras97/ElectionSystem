<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Election;
use App\Models\User;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class UsersControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_voter_belongs_to_many_elections()
    {
        $user = User::factory()->create();
//        $election = Election::factory()->create();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $user->elections);
    }

    /**
     * @test
     */
    public function can_return_a_collection_of_paginated_users()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/users');

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
    public function can_create_a_user()
    {
        //Given

        //When
        $faker = Factory::create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('POST', '/api/users', [
            'firstname' => $firstname = $faker->firstName,
            'lastname' => $lastname = $faker->lastName,
            'birthdate' => $birthdate = $faker->date($format = 'Y-m-d', $max = 'now'),
            'password' => $password = bcrypt('secret'),
            'street_address' => $street_address = $faker->streetAddress,
            'city' => $city = $faker->city,
            'district' => $district = $faker->state,
            'gender' => $gender = $faker->randomElement($array = array('male', 'female'))
        ]);

        //Then

        $response->assertJsonStructure([
            'id',
            'firstname',
            'lastname',
            'birthdate',
            'street_address',
            'city',
            'district',
            'gender',
            'is_admin',
            'created_at',
        ])->assertJson([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender
        ])->assertStatus(201);

//        $this->assertDatabaseHas('users', [
//            'firstname' => $firstname,
//            'lastname' => $lastname,
//            'birthdate' => $birthdate,
//            'password' => $password,
//            'street_address' => $street_address,
//            'city' => $city,
//            'district' => $district,
//            'gender' => $gender,
//            'is_admin' => "0",
//        ]);
    }


    /**
     * @test
     */
    public function will_fail_with_a_404_if_user_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', 'api/users/-1');

        $response->assertStatus(404);
    }
    /**
     * @test
     */
    public function can_return_a_user()
    {
        $user = $this->create('User');

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('GET', "/api/users/$user->id");

        $response->assertStatus(200)
        ->assertExactJson([
            'id' => $user->id,
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'birthdate' => $user->birthdate,
            'street_address' => $user->street_address,
            'city' => $user->city,
            'district' => $user->district,
            'gender' => $user->gender,
            'is_admin' => "0",
            'created_at' => (string)$user->created_at
        ]);

    }

    /**
     * @test
     */
    public function will_fail_with_404_if_user_we_want_to_update_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', 'api/users/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_update_a_user()
    {
//        $user = $this->create('User');
        $user = User::factory()->create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('PUT', "/api/users/$user->id", [
            'firstname' => $user->firstname.'_updated',
            'lastname' => $user->lastname.'_updated',
            'street_address' => $user->street_address.'_updated',
            'city' => $user->city.'_updated',
            'district' => $user->district.'_updated',
            'gender' => $user->gender.'_updated',
        ]);

        $response->assertStatus(200)
        ->assertExactJson([
            'id' => $user->id,
            'firstname' => $user->firstname.'_updated',
            'lastname' => $user->lastname.'_updated',
            'birthdate' => $user->birthdate,
            'street_address' => $user->street_address.'_updated',
            'city' => $user->city.'_updated',
            'district' => $user->district.'_updated',
            'gender' => $user->gender.'_updated',
            'is_admin' => "0",
            'created_at' => (string)$user->created_at
        ]);
        Log::info(1, [$response->getContent()]);
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'firstname' => $user->firstname.'_updated',
            'lastname' => $user->lastname.'_updated',
            'birthdate' => $user->birthdate,
            'password' => $user->password,
            'street_address' => $user->street_address.'_updated',
            'city' => $user->city.'_updated',
            'district' => $user->district.'_updated',
            'gender' => $user->gender.'_updated',
            'created_at' => (string)$user->created_at,
            'updated_at' => (string)$user->updated_at
        ]);
    }

    /**
     * @test
     */
    public function will_fail_with_404_if_user_we_want_to_delete_is_not_found()
    {
        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', 'api/users/-1');

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function can_delete_user()
    {
        $user = $this->create('User', [], false);
//        $user = User::factory()->create();

        $response = $this->actingAs($this->create('User', [], false), 'api')->json('DELETE', "/api/users/$user->id");

        $response->assertStatus(204)->assertSee(null);
        $this->assertDeleted($user);
        $this->assertDatabaseMissing('users', ['id' => $user->id]);
    }
}
