<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Chapter;

class ContentController extends Controller
{
    //

    public function view(Chapter $chapter){

     return view('resource.content',compact('chapter'));
    }

    public function create(){

     return view('resource.content.create');

    }

}
