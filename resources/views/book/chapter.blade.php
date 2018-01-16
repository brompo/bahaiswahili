
@extends ('layout.master')

@section('content')

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
					<h1 id="fh5co-logo"><a href="/index.html">Maandiko ya Kibaha'i</a></h1>
				</div>

			</div>

		</div>

	</header>


	<a href="#" class="fh5co-post-prev"><span><i class="icon-chevron-left"></i> Prev</span></a>
	<a href="#" class="fh5co-post-next"><span>Next <i class="icon-chevron-right"></i></span></a>
	<!-- END #fh5co-header -->
	<div class="container-fluid">
		<div class="row fh5co-post-entry single-entry">
			<article class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
				<h2 class="fh5co-article-title animate-box"><a href="single.html">{{$chapter->title}}</a></h2>
				<span class="fh5co-meta fh5co-date animate-box">{{$chapter->book_id}}</span>

    @foreach ($chapter->contents as $content)
		 	<div class="row animate-box">
				<a href="{{$content->id}}"><h2> {{$content->title}}</h2></a>
				<a href="{{$content->id}}"><h2> {{$content->content}}</h2></a>
			</div>
				@endforeach

    <form action="chapters/store" method="post">
     {{ csrf_field() }}
     <div class="row">
      <label for="title" class="col-sm-3">Title:</label>
      <input type="text" name="title" value="" class="col-sm-9" required><br />
     </div>
     <br />
     <button type="submit" name="button" class="col-sm-6">Add A Chapter</button>

    </form>


			</article>
		</div>
	</div>

	@endsection
