<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\PropertyController;

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

Route::get('/properties', [PropertyController::class, 'index']);
Route::prefix('/property')->group(function(){
    Route::get('/{id}', [PropertyController::class, 'show']);
    Route::post('/store', [PropertyController::class, 'store']);
    Route::post('/update/{id}', [PropertyController::class, 'update']);
    Route::delete('/{id}', [PropertyController::class, 'destroy']);
});

