
var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 700,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mainScreen', 'assets/images/mainScreen.png');
    this.load.image('playButton', 'assets/images/PlayButton.png');
}
/**
*   creating the main menu
**/
function create ()
{
    this.add.image(450, 345, 'mainScreen'); 
    this.add.image(450,345,'playButton').setInteractive()
        .on('pointerdown', () => startGame() )
        .on('pointerover', () => enterButtonHoverState() )
        .on('pointerout', () => enterButtonRestState() );
    
};

function startGame() {
    console.log("starting game");//implement start of the game
}

function enterButtonHoverState() {
}

function enterButtonRestState() {

}



