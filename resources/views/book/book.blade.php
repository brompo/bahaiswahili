
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
					<h1 id="fh5co-logo"><a href="/books">Maandiko ya Kibaha'i</a></h1>
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
				<figure class="animate-box">
					<img src="images/single_1.jpg" alt="Image" class="img-responsive">
				</figure>
				<span class="fh5co-meta animate-box"><a href="single.html">Travel</a></span>
				<h2 class="fh5co-article-title animate-box"><a href="single.html">{{$book->title}}</a></h2>
				<span class="fh5co-meta fh5co-date animate-box">{{$book->author}}</span>

@foreach ($book->chapters as $chapter)
			<div class="row animate-box">
				<h2>{{$chapter->title}}</h2>
			</div>

				<div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
					<div class="row">
						<div class="col-lg-12 cp-r animate-box">
							@foreach ($chapter->content as $content)

							<h2>{{$content->title}}</h2>
							<p class="{{$content->style}}">{{$content->content}}</p>
<!--								<p>&ldquo;{{$content->content}} &rdquo; <cite>&mdash; Baha'u'llah</cite></p>-->
							@endforeach

						</div>
					</div>

				</div>

				@endforeach
			</article>
		</div>
	</div>

	@endsection
