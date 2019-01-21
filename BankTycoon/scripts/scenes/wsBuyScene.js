class WS_kaufenScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'WS_kaufenScene' });
  }

  preload(){
    this.load.image('logo', 'assets/images/logo3Small.png')
    this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', 'assets/images/hilfe.png')
    this.load.image('buttonBack', 'assets/images/back.png')
    this.load.image('buttonAktien', 'assets/images/aktien.png')
    this.load.image('buttonObligationen', 'assets/images/obligationen.png')
    this.load.image('buttonImmobilien', 'assets/images/immobilien.png')
    this.load.image('kaufAnzeige', 'assets/images/popUp.png')
    this.load.image('buttonLock', 'assets/images/lock.png')
    this.load.image('buttonMinus', 'assets/images/minus.png')
    this.load.image('buttonPlus', 'assets/images/plus.png')

  }
  create(){
      //logo
      this.logo = this.add.sprite(310, 100, 'logo');
      //Anzeigetafel
      this.logo = this.add.sprite(1325, 155, 'anzeige');
      //Text
      this.incomeStatsText = this.add.text(1150, 70, 'Guthaben\: '+account.getMoney(), { font: "28px Arial", color: 0xffffff });
      this.retailStatsText = this.add.text(1200, 220, ''+account.getBank(1), { font: "28px Arial", color: 0xffffff });
      this.privateStatsText = this.add.text(1355, 220, ''+account.getBank(2), { font: "28px Arial", color: 0xffffff });
      this.investStatsText = this.add.text(1500, 220, ''+account.getBank(3), { font: "28px Arial", color: 0xffffff });
      //Kaufanzeige
      this.kaufAnzeige = this.add.sprite(550, 500, 'kaufAnzeige');
      //BackButton
      this.buttonBack = this.add.sprite(1430, 840, 'buttonBack').setInteractive();
      //Button Help
      this.buttonHelp = this.add.sprite(1540, 840, 'buttonHelp').setInteractive();
      //Kaufbutton Retail
      this.buttonAktien = this.add.sprite(300, 300, 'buttonAktien').setInteractive();
      //Kaufbutton Private
      this.buttonObligationen = this.add.sprite(530, 300, 'buttonObligationen').setInteractive();
      //Kaufbutton Investment
      this.buttonImmobilien = this.add.sprite(760, 300, 'buttonImmobilien').setInteractive();

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start(originScene);
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst du entscheiden, worin du investieren möchtest"; 
        originScene='WS_kaufenScene';
        this.scene.start('anleitungScene');
        }, this);

      this.buttonAktien.on('pointerdown', function (event) { 
      	originScene='WS_kaufenScene';    
        this.scene.start('shareBuyScene');
        }, this);

      this.buttonObligationen.on('pointerdown', function (event) {     
      	originScene='WS_kaufenScene';    
        this.scene.start('obligationBuyScene');
        }, this);

      this.buttonImmobilien.on('pointerdown', function (event) {     
        originScene='WS_kaufenScene';    
        this.scene.start('houseBuyScene');
        }, this);
    }
    update(){
        this.incomeStatsText.setText('Guthaben\: '+account.getMoney())
    }


}