// Our scenes
var gameScene = new Phaser.Scene("game");
var titleScene = new Phaser.Scene("title");

gameScene.init = function() {

};

gameScene.preload = function() {

};

gameScene.create = function() {

};

gameScene.update = function() {

};


gameScene.end = function() {

};

titleScene.preload = function() {
	this.load.image('background', 'img/random.jpg');
};

titleScene.create = function() {
	let bg = this.add.image(0,0,'background');
    bg.setOrigin(0,0);

    let text = this.add.text(100,100, 'Welcome To My Game!');
};

// We no longer add the scene to the config
let config = {
	type: Phaser.AUTO,
	scale: {
        parent: '#game',
        width: 800,
        height: 600 
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }
    },
};

// Our game Object
let game = new Phaser.Game(config);

// Add both scenes (it does not start them)
game.scene.add('titleScene', titleScene);
game.scene.add("game", gameScene);

// Start the title scene
game.scene.start('titleScene');