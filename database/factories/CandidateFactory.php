<?php

namespace Database\Factories;

use App\Models\Candidate;
use Illuminate\Database\Eloquent\Factories\Factory;

class CandidateFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Candidate::class;

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
        $street_address = $this->faker->streetAddress;
        $city = $this->faker->city;
        $district = $this->faker->state;
        $gender = $this->faker->randomElement($array = array ('male','female'));

        return [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => $birthdate,
            'street_address' => $street_address,
            'city' => $city,
            'district' => $district,
            'gender' => $gender,
        ];
    }
}
