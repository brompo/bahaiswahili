@extends ('layout.master')

@section ('content')

	<body>

@extends('layout.menu')

	<header id="fh5co-header">

		<div class="container-fluid">

			<div class="row">
				<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
				<ul class="fh5co-social">
					<li><a href="#"><i class="icon-twitter"></i></a></li>
					<li><a href="#"><i class="icon-facebook"></i></a></li>
					<li><a href="#"><i class="icon-instagram"></i></a></li>
				</ul>
				<div class="col-lg-12 col-md-12 text-center">
					<h1 id="fh5co-logo"><a href="/books">Maandiko ya Kibahai </a></h1>
				</div>

			</div>

		</div>

	</header>

	<!-- END #fh5co-header -->

	<div class="container-fluid">
		<div class="container row fh5co-post-entry">

  <form action="store" method="post">
   {{ csrf_field() }}
   <div class="row">
    <label for="title" class="col-sm-3">Chapter Title:</label>
    <input type="text" name="title" value="" class="col-sm-9" required><br />
   </div>
   <br />
			<div class="row">
    <label for="author" class="col-sm-3">Author: </label>
    <input type="text" name="author" value="" class="col-sm-9"><br />
   </div>
   <br />
   <div class="row">
    <label for="category" class="col-sm-3">Category: </label>
    <input type="text" name="category" value="" class="col-sm-9" required><br />
   </div>
   <br />
   <div class="row">
    <label for="image" class="col-sm-3">Image: </label>
    <input type="text" name="image" value="" class="col-sm-9"><br />
   </div>
   <br />
   <div class="row">
    <label for="publishedDate" class="col-sm-3">Published Date: </label>
    <input type="date" name="publishedDate" value="" class="col-sm-9"><br />
   </div>
   <br />
			<div class="row">
    <label for="type" class="col-sm-3">Type: </label>
    <input type="text" name="type" value="" class="col-sm-9"><br />
   </div>
   <br />

   <button type="submit" name="button" class="col-sm-6">Add Resource</button>

  </form>

		</div>
	</div>

@endsection
