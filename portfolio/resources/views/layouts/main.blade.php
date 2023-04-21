<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glenn Andaleon</title>

    <!-- BS ICON -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <div class="wrapper">
        <div class="navbar">
            <div class="nav-brand">
                <a href="/"><span class="txt-variant">GA</span>ndaleon</a>
            </div>
            <!-- <div class="nav-links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </div> -->
        </div>
        @yield('content')
    </div>
    <script src="/js/action.js"></script>
</body>

</html>