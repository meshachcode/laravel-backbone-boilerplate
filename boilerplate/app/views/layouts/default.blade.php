<!doctype html>
<html class="page no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>{{ $page_title or "Welcome!"}}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:700">
        <link rel="stylesheet" href="/css/style.min.css">
        <script src="/js/modernizr.min.js"></script>
    </head>
    <body>
        @yield('body')
        @yield('scripts')
    </body>
</html>
