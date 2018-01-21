<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;

class CategoryController extends Controller
{
    //

    public function index(){

     $categories = Category::all();

     return view('home',compact('categories'));

    }

    public function show($id)
    {
     $category = Category::find($id);
     return view('category',compact('category'));

    }
}
