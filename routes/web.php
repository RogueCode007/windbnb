<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\web\PropertyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/property/store', [PropertyController::class, 'create'])->name('addItems');
Route::post('/property/store', [PropertyController::class, 'store']);
