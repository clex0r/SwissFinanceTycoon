class obligationBuyScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'obligationBuyScene' });
  }

  preload(){
    this.load.image('logo', 'assets/images/logo3Small.png')
    this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', 'assets/images/hilfe.png')
    this.load.image('buttonBack', 'assets/images/back.png')
    this.load.image('obligation1', 'assets/images/obligation1.png')
    this.load.image('obligation2', 'assets/images/obligation2.png')
    this.load.image('obligation3', 'assets/images/obligation3.png')

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
      this.buttonObligation3 = this.add.sprite(300, 300, 'obligation1').setInteractive();
      //Kaufbutton Private
      this.buttonObligation2 = this.add.sprite(530, 300, 'obligation2').setInteractive();
      //Kaufbutton Investment
      this.buttonObligation1 = this.add.sprite(760, 300, 'obligation3').setInteractive();

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start(originScene);
        originScene='mainGameScene';
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst du entscheiden, welche Art obligation du kaufen möchtest";   
        this.scene.start('anleitungScene');
        }, this);

      this.buttonObligation1.on('pointerdown', function (event) {  
        shownText="C"
        securityTypeChosen=0;   
        this.scene.start('obligationBuySpecificScene');
        }, this);

      this.buttonObligation2.on('pointerdown', function (event) {     
        shownText="B"
        securityTypeChosen=1;   
        this.scene.start('obligationBuySpecificScene');
        }, this);

      this.buttonObligation3.on('pointerdown', function (event) {     
        shownText="A"
        securityTypeChosen=2;   
        this.scene.start('obligationBuySpecificScene');
        }, this);
    }
    update(){
      this.incomeStatsText.setText('Guthaben\: '+account.getMoney())
    }
  }