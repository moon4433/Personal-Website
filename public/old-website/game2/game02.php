
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>keeganrjohnson.com - Game 02</title>
        <link href="stylesheets/main.css" rel="stylesheet" type="text/css">
        <link href="stylesheets/game02.css" rel="stylesheet" type="text/css">
    </head>
    <body>

        <header id="game2navbar">
            <ul id="game2nav">
                <li><a id="game2navitem" class="home" id="home5" href="../index.php">Back</a></li>
            </ul>
        </header>

        <section class="game2" id="second">
            
            <h1 id="game02title">Connect Four</h1>
            
            
            
            <div id="board"></div>
            
            <div id="announce">
            <h4 id="gametext">It's <span id="player">red</span>'s turn!</h4>
            </div>
            
            <button id="restart">Restart</button>
            
            <div id="description">
                <span id="game02description">
                Click on spaces to place piece in slot.
                </span>
                <span id="game02description2">       
                Try to connect four of one color either
                horizontally, vertically, or diagonally.
                </span>
            </div>
        </section>

        <footer id="game2footer">
            <p id="game2p">KEEGAN JOHNSON</p>
        </footer>
        <script src="js/jquery-3.4.1.js"></script>
        <script src="js/connectfour.js"></script>
        <script src="js/MainCf.js"></script>

    </body>
</html>