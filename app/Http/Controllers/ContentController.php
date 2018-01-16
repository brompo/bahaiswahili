<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Chapter;

class ContentController extends Controller
{
    //
    public function view(Chapter $chapter){
     return ('book.content',compact('chapter'));
    }
}
