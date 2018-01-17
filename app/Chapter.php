<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    //

    protected $fillable = [
        'title', 'resource_id'
    ];

    public function book()
    {
     return $this->belongsTo(Resource::class);
    }

    public function contents()
    {
     return $this->hasMany(Content::class);
    }
}
