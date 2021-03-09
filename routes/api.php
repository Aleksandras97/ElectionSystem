<?php

use App\Http\Controllers\Api\VoterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




Route::namespace('Api')->group(function () {
//    Route::get('/respondents', [VoterController::class, 'index']);
//    Route::get('/respondents/{id}', [VoterController::class, 'show']);
//    Route::post('/respondents', [VoterController::class, 'store']);
//    Route::put('/respondents/{id}', [VoterController::class, 'update']);
//    Route::delete('/respondents/{id}', [VoterController::class, 'destroy']);
});
Route::middleware('auth:api')->group(function () {
    Route::apiResource('voters', VoterController::class);
});
