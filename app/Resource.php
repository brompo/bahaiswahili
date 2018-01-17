<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    //

    protected $fillable = [
        'name', 'email', 'password','title','category','author','published_date','type'
    ];

    public function chapters(){

     return $this->hasMany(Chapter::class);
    }

}
