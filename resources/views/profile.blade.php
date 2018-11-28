@extends('layouts.app')

@section('content')
    <div class="main">
        <!--==============================header=================================-->
        <header>
            <h1><a href="index.html"><img src="images/logo.png" alt=""></a></h1>
            <nav>
                <div id="slide">
                    <div class="slider">
                        <ul class="items">
                            <li><img src="images/slider-1.jpg" alt="" /></li>
                            <li><img src="images/slider-2.jpg" alt="" /></li>
                            <li><img src="images/slider-3.jpg" alt="" /></li>
                        </ul>
                    </div>
                    <a href="#" class="prev"></a><a href="#" class="next"></a>
                </div>
                <ul class="menu">
                    <li class="current"><a href="#" class="clr-1">Home</a></li>
                    <li><a href="/profile" class="clr-2">Profile</a></li>
                    {{--<li><a href="/profile" class="clr-3">Профиль</a></li>--}}
                    {{--<li><a href="#" class="clr-4">Gallery</a></li>--}}
                    {{--<li><a href="#" class="clr-5">Contacts</a></li>--}}
                </ul>
            </nav>
        </header>
        <!--==============================content================================-->
        <section id="content">
            <div class="container_12">
                <div class="grid_8">
                    <div class="pad-1">
                        <h2 class="p2">Welcome to Art School</h2>
                        <p>Бла-бла-бла (ваш текст короче)</p>
                    </div>
                    <div class="block-1">
                        <div class="block-1-shadow">
                            <h2 class="clr-6 p4">Our Gallery</h2>
                            <div class="box-1">
                                <a href="#" class="img-border"><img src="images/img1.jpg" alt=""></a>
                                <p class="text-2">Jennifer, 10 years</p>
                            </div>
                            <div class="box-1 last">
                                <a href="#" class="img-border"><img src="images/img2.jpg" alt=""></a>
                                <p class="text-2">Martin, 13 years</p>
                            </div>
                            <div class="clear p5"></div>
                            <div class="box-1">
                                <a href="#" class="img-border"><img src="images/img3.jpg" alt=""></a>
                                <p class="text-2">Sebastian, 14 years</p>
                            </div>
                            <div class="box-1 last">
                                <a href="#" class="img-border"><img src="images/img4.jpg" alt=""></a>
                                <p class="text-2">Fiona, 8 years</p>
                            </div>
                            <div class="clear"></div>
                            <div class="pad-2">
                                <a href="#" class="link-2">Full Gallery</a>
                            </div>
                        </div>
                    </div>
                    <!--==============================footer=================================-->
                    <footer>
                        <p>© 2012 Art School</p>
                        <p>Website Template by <a class="link" href="http://www.templatemonster.com/" target="_blank" rel="nofollow">www.templatemonster.com</a></p>
                    </footer>
                </div>
                <div class="clear"></div>
            </div>
        </section>
    </div>
@endsection