<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    //

    protected $fillable = [
        'title', 'book_id'
    ];

    public function book()
    {
     return $this->belongsTo(Book::class);
    }

    public function contents()
    {
     return $this->hasMany(Content::class);
    }
}
