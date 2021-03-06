<?php

namespace Tests;

use App\Models\Respondent;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\Http\Resources\Respondent as RespondentResource;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function create(string $model, array $attributes = [])
    {
        $respondent = Respondent::factory()->create($attributes);

        return new RespondentResource($respondent);
    }

}
