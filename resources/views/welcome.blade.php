<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Leasyng</title>
        <link href="/css/app.css" rel="stylesheet">
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
    </body>
    <script src="{{mix('js/app.js')}}"></script>
</html>
