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

    public function contents(){

     return $this->hasMany(Content::class);
    }

    public function categories(){

     return $this->belongsTo(Category::class);
    }

}
