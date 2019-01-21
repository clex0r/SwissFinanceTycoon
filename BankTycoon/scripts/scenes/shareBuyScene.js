class shareBuyScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'shareBuyScene' });
  }

  preload(){
    this.load.image('logo', 'assets/images/logo3Small.png')
    this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', 'assets/images/hilfe.png')
    this.load.image('buttonBack', 'assets/images/back.png')
    this.load.image('buttonAktieC', 'assets/images/aktieC.png')
    this.load.image('buttonAktieB', 'assets/images/aktieB.png')
    this.load.image('buttonAktieA', 'assets/images/aktieA.png')

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
      this.buttonAktienC = this.add.sprite(300, 300, 'buttonAktieC').setInteractive();
      //Kaufbutton Private
      this.buttonAktienB = this.add.sprite(530, 300, 'buttonAktieB').setInteractive();
      //Kaufbutton Investment
      this.buttonAktienA = this.add.sprite(760, 300, 'buttonAktieA').setInteractive();

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start(originScene);
        originScene='mainGameScene';
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst du entscheiden, welche Aktie du kaufen möchtest";
        this.scene.start('anleitungScene');
        }, this);

      this.buttonAktienC.on('pointerdown', function (event) {  
        shownText="A"
        securityTypeChosen=0;   
        this.scene.start('shareBuySpecificScene');
        }, this);

      this.buttonAktienB.on('pointerdown', function (event) {     
        shownText="B"
        securityTypeChosen=1;   
        this.scene.start('shareBuySpecificScene');
        }, this);

      this.buttonAktienA.on('pointerdown', function (event) {     
        shownText="C"
        securityTypeChosen=2;   
        this.scene.start('shareBuySpecificScene');
        }, this);
    }
    update(){
      this.incomeStatsText.setText('Guthaben\: '+account.getMoney())
    }
  }