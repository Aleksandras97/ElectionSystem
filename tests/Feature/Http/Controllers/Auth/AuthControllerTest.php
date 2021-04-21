<?php

namespace Tests\Feature\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;


//    public function setUp(): void
//    {
//        parent::setUp(); // TODO: Change the autogenerated stub
//
//        $this->artisan('passport:install');
//    }

    /**
     * @test
     */
    public function can_authenticate()
    {

//        $this->withoutMiddleware();
        $user = User::factory()->create();
//        dd($user);
        $response = $this->json('POST', '/login', [
            'username' => $user->username,
            'password' => 'secret'
        ]);

        $response->assertStatus(200)->assertJsonStructure(['access_token']);


    }
}
