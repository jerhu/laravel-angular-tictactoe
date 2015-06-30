<?php

// App
Route::get('/', ['as' => 'home', 'uses' => 'MainController@index']);

// TODO: Restricted access
// Route::get('play', ['as' => 'play', 'middleware' => 'auth', 'uses' => 'PlayController@index']);

// TODO: Authentification
/*
Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
// */
