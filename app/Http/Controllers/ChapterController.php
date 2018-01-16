<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use App\Chapter;

class ChapterController extends Controller
{
    //

    public function view(Book $book){

     return view('book.chapters',compact('book'));

    }

    public function store(Book $book){

     Chapter::create([
     'title'=> request('title'),
     'book_id'=> $book->id
     ]);

     return back();

    }

    public function showchapter($chapterid,$id){

     $chapter = Chapter::find($id);
     //The Chapter ID and ID does not make sense

     return view('book.chapter', compact('chapter'));


    }
}
