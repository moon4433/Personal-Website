$(document).ready(function() {
    // TODO: Draw a grid
    const connect4 = new Connect4('#board');
    
    connect4.onPlayerMove = function() {
        $('#player').text(connect4.player);
    }
    $('#restart').click(function() {
        connect4.restart();
    })
});