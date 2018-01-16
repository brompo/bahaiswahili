<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{

 public function index(){

  $books = Book::all();

  return view('home',compact('books'));

  }


 public function show($id){

  $book = Book::find($id);

  return view('book.book',compact('book'));

 }

 public function create(){

   return view('book.create');
 }

 public function store(){

  Book::create([
    'title' => request('title'),
    'category' => request('category'),
    'author' => request('author')
   ]);

 return redirect('/');

 }


 public function content(){
  return view('book.content');
 }

}
