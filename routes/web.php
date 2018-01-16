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

Route::get('/','BookController@index');

Route::get('/index.html','BookController@index');

Route::get('/books','BookController@index');

Route::get('/books/create','BookController@create');

Route::post('/books/store','BookController@store');

Route::get('/books/{book}','BookController@show');

Route::get('/content','BookController@content');

Route::get('/books/{book}/chapters','ChapterController@view');

Route::get('/books/{id}/chapters/{chapterid}','ChapterController@showchapter');

Route::post('/books/{book}/chapters/store','ChapterController@store');

Route::get('/books/{book}/chapters/{content}'.'ContentController@show');
