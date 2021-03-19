<?php

use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\ElectionController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VoterController;
use App\Http\Controllers\Auth\AuthController;
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
//    Route::get('users', [UserController::class, 'index']);
//    Route::get('users/{user}', [UserController::class, 'show']);
//    Route::post('users', [UserController::class, 'store']);
//    Route::put('users/{user}', [UserController::class, 'update']);
//    Route::delete('users/{user}', [UserController::class, 'destroy']);
//    Route::get('candidates', [UserController::class, 'index']);
//    Route::get('candidates/{user}', [UserController::class, 'show']);
//    Route::get('candidates', [CandidateController::class, 'index']);
//    Route::get('candidates/{candidate}', [CandidateController::class, 'show']);
//    Route::post('candidates', [CandidateController::class, 'store']);
//    Route::put('candidates/{candidate}', [CandidateController::class, 'update']);
//    Route::delete('candidates/{candidate}', [CandidateController::class, 'destroy']);
        Route::get('/elections', [ElectionController::class, 'index']);
        Route::get('elections/{election}', [ElectionController::class, 'show']);
        Route::post('elections', [ElectionController::class, 'store']);
        Route::put('elections/{election}', [ElectionController::class, 'update']);
        Route::delete('elections/{election}', [ElectionController::class, 'destroy']);
});
Route::apiResource('candidates', CandidateController::class);
Route::apiResource('users', UserController::class);

Route::middleware('auth:api')->group(function () {
    Route::apiResource('voters', VoterController::class);
});
