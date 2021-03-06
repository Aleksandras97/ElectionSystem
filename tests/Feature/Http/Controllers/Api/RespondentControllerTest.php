<?php

namespace Tests\Feature\Http\Controllers\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
        //Given
            // user s authenticated
        //When
        $response = $this->json('Post', 'api/respondents', [

        ]);
            // post request create respondent
        //Then
            // respondent exists
        $response->assertStatus(201);
    }
}
