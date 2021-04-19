<?php

use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\ElectionController;
use App\Http\Controllers\Api\ElectionVoting;
use App\Http\Controllers\api\ProfilesController;
use App\Http\Controllers\Api\UserController;
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

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('loginUser', [ProfilesController::class, 'showLoginUser']);
    Route::get('search/elections/{val}', [ElectionController::class, 'search']);
    Route::apiResource('elections', ElectionController::class);
    Route::get('search/elections/{election}/candidates/{val}', [CandidateController::class, 'search']);
    Route::apiResource('elections.candidates', CandidateController::class)->shallow();
    Route::apiResource('users', UserController::class);
    Route::post('vote', [ElectionVoting::class, 'store']);
    Route::post('voted', [ElectionVoting::class, 'isVoted']);
    Route::get('results/{id}', [ElectionVoting::class, 'results']);
});

Route::post('/login', [AuthController::class, 'login']);

