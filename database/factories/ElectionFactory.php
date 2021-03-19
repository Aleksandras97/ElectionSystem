<?php

namespace Database\Factories;

use App\Models\Election;
use Illuminate\Database\Eloquent\Factories\Factory;

class ElectionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Election::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $election_date = $this->faker->date($format = 'Y-m-d', $max = 'now');
        $election_name = $this->faker->catchPhrase;
        $election_image = $this->faker->name;

        return [
            'election_date' => $election_date,
            'election_name' => $election_name,
            'election_image' => $election_image,
        ];
    }
}
