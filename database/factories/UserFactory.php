<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $firstname = $this->faker->firstName;
        $lastname = $this->faker->lastName;
        $birthdate = $this->faker->date($format = 'Y-m-d', $max = 'now');
        $password = bcrypt('secret');
        $street_address = $this->faker->streetAddress;
        $city = $this->faker->city;
        $district = $this->faker->state;
        $gender = $this->faker->randomElement($array = array ('male','female'));

        return [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'password' => $password, //secret
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
