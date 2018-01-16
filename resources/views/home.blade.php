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
					<h1 id="fh5co-logo"><a href="index.html">Maandiko ya Kibahai </a></h1>
				</div>

			</div>

		</div>

	</header>

	<!-- END #fh5co-header -->

	<div class="container-fluid">
		<div class="row fh5co-post-entry">

@foreach ($books as $book)
			<article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
				<figure>
					<a href="/books/{{$book->id}}"><img src="images/pic_1.jpg" alt="Image" class="img-responsive"></a>
				</figure>
				<span class="fh5co-meta"><a href="#">{{$book->category}}</a></span>
				<h2 class="fh5co-article-title"><a href="/books/{{$book->id}}">{{$book->title}}</a></h2>
				<span class="fh5co-meta fh5co-date">{{$book->author}}</span>
			</article>

@endforeach

		</div>
	</div>

@endsection
