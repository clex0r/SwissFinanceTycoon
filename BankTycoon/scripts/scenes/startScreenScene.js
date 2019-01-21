
class startScreen extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'startScreen', active: true });
    }

    preload ()
    {
        this.load.image('buttonPlay', '././assets/images/smallStart.png');
        
        this.load.image('logo', '././assets/images/logo3Small.png');
    }

    create ()
    {
       //logo
        this.add.image(310, 100, 'logo');
        // Playbutton
        this.buttonPlay = this.add.sprite(800, 450, 'buttonPlay').setInteractive();
        this.buttonPlay.on('pointerover', this.playOnTint);
        this.buttonPlay.on('pointerout', this.playOffTint);
        this.buttonPlay.on('pointerdown', this.startGame);
        //Helpbutton
    }
    startGame() {
        console.log('Game started!');
        window.open("game.html","_self");
    }
    playOnTint() {
        console.log('hover true!');
        //gameObject.setTint(0x7878ff);
    }
    playOffTint() {
        console.log(' hover off!');
        //gameObject.clearTint();
    }

}

