<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/css/app.css" rel="stylesheet">
        <title>Designer - Matteo De Lorenzi</title>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-210812170-1">
        </script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-210812170-1');
        </script>
    </head>
    <body data-barba="wrapper" asscroll-container>
        <div class="js-loader" style="height: 100vh; width: 100vw; background-color:#1C1C1C;position: absolute;top:0;left:0;opacity: 1;z-index:999; pointer-events: none;">
            <h2 class="about__title slide-js"><span>M</span>atteo <span class="_secondary">De Lorenzi</span></h2>
        </div>
        <div class="rectangle"></div>
        <main data-barba="container" data-barba-namespace="default" asscroll>
            @yield("content")
        </main>
    </body>
    <script src="/js/app.js"></script>
</html>
