class houseBuyScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'houseBuyScene' });
  }

  preload(){
    this.load.image('logo', 'assets/images/logo3Small.png')
    this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', 'assets/images/hilfe.png')
    this.load.image('buttonBack', 'assets/images/back.png')
    this.load.image('house1', 'assets/images/haus.png')
    this.load.image('house2', 'assets/images/hochhaus.png')
    this.load.image('house3', 'assets/images/hotel.png')
    this.load.image('house4', 'assets/images/villa.png')

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
      this.buttonHouse1 = this.add.sprite(350, 350, 'house1').setInteractive();
      //Kaufbutton Private
      this.buttonHouse2 = this.add.sprite(750, 380, 'house2').setInteractive();
      //Kaufbutton Investment
      this.buttonHouse3 = this.add.sprite(350, 650, 'house3').setInteractive();

      this.buttonHouse4 = this.add.sprite(750, 660, 'house4').setInteractive();

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start(originScene);
        originScene='mainGameScene';
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst du dich entscheiden, welche art Immobilie du kaufen möchtest"; 
        this.scene.start('anleitungScene');
        }, this);

      this.buttonHouse1.on('pointerdown', function (event) {  
        shownText="Haus"
        securityTypeChosen=0;   
        this.scene.start('houseBuySpecificScene');
        }, this);

      this.buttonHouse2.on('pointerdown', function (event) {     
        shownText="Hochhaus"
        securityTypeChosen=1;   
        this.scene.start('houseBuySpecificScene');
        }, this);

      this.buttonHouse3.on('pointerdown', function (event) {     
        shownText="Hotel"
        securityTypeChosen=2;   
        this.scene.start('houseBuySpecificScene');
        }, this);

      this.buttonHouse4.on('pointerdown', function (event) {     
        shownText="Villa"
        securityTypeChosen=3;   
        this.scene.start('houseBuySpecificScene');
        }, this);
    }
    update(){
      this.incomeStatsText.setText('Guthaben\: '+account.getMoney())
    }
  }