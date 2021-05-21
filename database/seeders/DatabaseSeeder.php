<?php

namespace Database\Seeders;

use App\Models\Candidate;
use App\Models\Election;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        Election::factory(10)->create();
        Candidate::factory(10)->create();
        User::factory()->create(['is_admin' => true, 'password' => 'admin123']);
    }
}
