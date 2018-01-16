<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    //

    protected $fillable = [
        'name', 'email', 'password','title','category','author','published_date'
    ];

/*
    public function create(){

     return View('home');
    }
*/
    public function chapters(){

     return $this->hasMany(Chapter::class);
    }


}
