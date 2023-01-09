<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>keeganrjohnson.com - Game 03</title>
        <link href="stylesheets/main.css" rel="stylesheet" type="text/css">
        <link href="stylesheets/game3.css" rel="stylesheet" type="text/css">
        <link href="stylesheets/checkers.css" rel="stylesheet" type="text/css">
    </head>
    <body id="ht">

        <header id="game3navbar">
            <ul id="game3nav">
                <li><a id="game3navitem" class="home" id="home5" href="../index.php">Back</a></li>
            </ul>
        </header>

        <section class="game3" id="second">
            
            <h1 id="game03title">Checkers</h1>
            
            <div class="checker white_checker" style="display:none"> </div>
            <div class="checker black_checker" style="display:none"> </div>
            <div class="square" style="display: none" id ="ht"> </div>
            <div class="black_background" id="black_background"> </div>

            <div class="score" id="score">
                <br>
            </div>
            <div class="table" id="table">

                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>  
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>
                <div class="checker white_checker"> </div>  

                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>
                <div class="checker black_checker"> </div>


                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="clear_float"> </div>
        
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="clear_float"> </div>

                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="clear_float"> </div>
        
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="clear_float"> </div>

                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="clear_float"> </div>

                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="clear_float"> </div>

                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="clear_float"> </div>

                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="square white_square"> </div>
                <div class="square black_square"> </div>
                <div class="clear_float"> </div>

                

            </div>
            <button id="restart" onClick="window.location.reload();">Restart</button>
            <div id="description">
                <span id="game03description">
                Red goes first. With local multiplayer.
                </span>
                <span id="game03description2">       
                Try to capture all the enemy pieces.
                </span>
            </div>
        </section>

        <footer id="game3footer">
            <p id="game3p">KEEGAN JOHNSON</p>
        </footer>
        
            
        <audio id="moveSound">
            <source src = "sounds/move.mp3"> 
        </audio>
        <audio id="winSound">
            <<source src="sounds/win.mp3">
        </audio>
        
        <script src="js/script.js" > </script>
    </body>
</html>