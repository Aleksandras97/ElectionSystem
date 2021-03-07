<?php

use App\Http\Controllers\Api\RespondentController;
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
//    Route::get('/respondents', [RespondentController::class, 'index']);
//    Route::get('/respondents/{id}', [RespondentController::class, 'show']);
//    Route::post('/respondents', [RespondentController::class, 'store']);
//    Route::put('/respondents/{id}', [RespondentController::class, 'update']);
//    Route::delete('/respondents/{id}', [RespondentController::class, 'destroy']);
});
Route::middleware('auth:api')->group(function () {
    Route::apiResource('respondents', RespondentController::class);
});
