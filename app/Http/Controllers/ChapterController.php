<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Resource;
use App\Chapter;

class ChapterController extends Controller
{
    //

    public function view(Resource $resource){

     return view('resource.chapters',compact('resource'));

    }

    public function store(Resource $resource){

     Chapter::create([
     'title'=> request('title'),
     'resource_id'=> $resource->id
     ]);

     return back();

    }

    public function showchapter($chapterid,$id){

     $chapter = Chapter::find($id);
     //The Chapter ID and ID does not make sense

     return view('resource.chapter', compact('chapter'));


    }
}
