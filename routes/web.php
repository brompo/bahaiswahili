<?php

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



//Get all categoris in the database
Route::get('/','CategoryController@index');

//Get all resources from a specific category
Route::get('/categories/{category}','CategoryController@show');

Route::get('/resources','ResourceController@index');

Route::get('/resources/create','ResourceController@create');

Route::post('/resources/store','ResourceController@store');

Route::get('/resources/{resource}','ResourceController@show');

Route::get('/resources/{resource}/contents/create','ContentController@create');

Route::get('/content','ResourceController@content');

Route::get('/resources/{resource}/chapters','ChapterController@view');

Route::get('/resources/{id}/chapters/{chapterid}','ChapterController@showchapter');

Route::post('/resources/{resource}/chapters/store','ChapterController@store');

Route::get('/resources/{resource}/chapters/{content}'.'ContentController@show');
