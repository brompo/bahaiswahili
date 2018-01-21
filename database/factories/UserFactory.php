<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Resource::class, function (Faker $faker) {
    static $password;

    return [
       // 'name' => $faker->name,
        'title' => "Ridvan 2017",
        'author'=> "Nyumba ya Haki ya Ulimwengu",
        'category'=>str_random(10),
        'type' => "nyaraka",
        /*
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        */
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    //static $password;

    return [
        'title' => str_random(50),
    ];
});
