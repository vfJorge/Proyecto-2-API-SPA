<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
|   Endpoints que pueden acceder los clientes de las APIs
*/


/*API Articulos CRUD*/ 
Route::group(['middleware'=>'api'],function(){
    Route::get('/articulos','App\Http\Controllers\ArticuloController@index');// mostrar todos los registros
    Route::get('/articulos/{id}','App\Http\Controllers\ArticuloController@show');// mostrar un registro
    Route::post('/articulos','App\Http\Controllers\ArticuloController@store');// crear un registro
    Route::put('/articulos/{id}','App\Http\Controllers\ArticuloController@update');// actualizar un registro
    Route::delete('/articulos/{id}','App\Http\Controllers\ArticuloController@destroy');// borrar un registro
});


/*API LogIn/Autenticacion de usuarios */ 
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthController@me');
    Route::get('type', 'App\Http\Controllers\AuthController@type');
    Route::post('register','App\Http\Controllers\AuthController@register');
});

    