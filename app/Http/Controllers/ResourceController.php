<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Resource;

class ResourceController extends Controller
{
    //

    public function index(){

     $resources = Resource::all();

     return view('home',compact('resources'));

     }


    public function show($id){

     $resource = Resource::find($id);

     return view('resource.resource',compact('resource'));

    }

    public function create(){

      return view('resource.create');
    }

    public function store(){

     Resource::create([
       'title' => request('title'),
       'category' => request('category'),
       'author' => request('author'),
       'type' => request('type')
      ]);

    return redirect('/');

    }


    public function content(){
     return view('resource.content');
    }

}
