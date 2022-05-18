<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware'=>'auth:api'],function(){
});

Route::get('/articulos/{id}','App\Http\Controllers\ArticuloController@show');// mostrar un registro
Route::get('/articulos','App\Http\Controllers\ArticuloController@index');// mostrar todos los registros
Route::get('/articulos/{id}','App\Http\Controllers\ArticuloController@show');// mostrar un registro
Route::post('/articulos','App\Http\Controllers\ArticuloController@store');// crear un registro
Route::put('/articulos/{id}','App\Http\Controllers\ArticuloController@update');// actualizar un registro
Route::delete('/articulos/{id}','App\Http\Controllers\ArticuloController@destroy');// borrar un registro

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('register','App\Http\Controllers\AuthController@register');
});