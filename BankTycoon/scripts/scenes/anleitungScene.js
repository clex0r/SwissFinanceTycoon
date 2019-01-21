class anleitungScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'anleitungScene' });
    }

    preload ()
    {
      this.load.image('logo', '././assets/images/logo3Small.png')
      this.load.image('anleitung', '././assets/images/anleitungSmall.png')
      this.load.image('buttonBack', '././assets/images/back.png')
    }

    create ()
    {


      //logo
      this.logo = this.add.sprite(310, 100, 'logo');
      //Button Back
      this.buttonBack = this.add.sprite(1430, 840, 'buttonBack').setInteractive();
      //main inhlat
      this.anleitung = this.add.sprite(800, 450, 'anleitung');

      this.hilfText = this.add.text(420, 450, shownText, { font: "30px Arial", color: 0xffffff, wordWrap:{width:800} });


      this.buttonBack.on('pointerdown', function (event) {
      this.scene.start(originScene);
      originScene='mainGameScene';
      }, this);
    }

}
