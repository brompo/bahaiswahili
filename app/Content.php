<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{

 protected $fillable = [
     'name', 'email', 'password','title','category','author','published_date','type'
 ];

    //
    public function chapter(){
     return $this->belongsTo(Chapter::class);
    }

    public function resource(){
     return $this->belongsTo(Resource::class);
    }
}
