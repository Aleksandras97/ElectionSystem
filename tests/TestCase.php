<?php

namespace Tests;

use App\Models\Respondent;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\Http\Resources\Respondent as RespondentResource;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function create(string $model, array $attributes = [], $resource = true)
    {
        $appModel = "App\\Models\\$model";
        $resourceModel = $appModel::factory()->create($attributes);
        $resourceClass = "App\\Http\\Resources\\$model";

        if (!$resource){
            return $resourceModel;
        }

        return new $resourceClass($resourceModel);
    }

}
