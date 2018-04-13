<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>@section('title')  {{Config::get('app.name')}} @show</title>
    @section('meta_keywords')
        <meta name="keywords" content="CHATBOT"/>
    @show @section('meta_author')
        <meta name="author" content="hailt"/>
        <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
    @yield('styles')
        @yield('styles_conversation_efo')
        @yield('styles_conversation')
            <style>
                @if (Cookie::get('locale') == 'vn')
              body {font-family: arial !important;}
                .modal-body label{
                    font-family: arial !important;
                }
                @endif
                .html5tooltip-box
                {
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 5px 10px rgba(0,0,0,.2);
                    color: #000;
                    font-family: arial,sans-serif;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    border: 1px solid rgba(0,0,0,.2);
                }
            </style>
    <!-- Fonts -->
        <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <!-- Scripts -->
        <script src="{{ elixir('js/app.js') }}"></script>
        <link rel="shortcut icon" href="{{{ URL::asset('favicon.ico') }}}">
</head>
<body>
<section id="container">
    @include('partials.header')
    @include('partials.sidemenu')
    <section id="main-content">
        <section class="wrapper">
            @yield('content')
        </section>
    </section>
</section>

@yield('scripts')
@yield('scripts2')
@yield('scripts3')
@yield('scripts4')
</body>
</html>