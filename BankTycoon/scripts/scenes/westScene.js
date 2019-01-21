class westScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'westScene' });
    }

  preload(){
    this.load.image('logo', '././assets/images/logo3Small.png')
    this.load.image('anzeige', '././assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', '././assets/images/hilfe.png')
    this.load.image('buttonBack', '././assets/images/back.png')
    this.load.image('buttonBank1', '././assets/images/B1.png')
    this.load.image('buttonBank2', '././assets/images/B2.png')
    this.load.image('buttonBank3', '././assets/images/B3.png')
    this.load.image('kantonWest', '././assets/images/westschweizBig.png')
    this.load.image('buttonBuy', '././assets/images/basic.png')

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

        this.shareTitle = this.add.text(30, 250, 'Aktuelle Aktienpreise:', { font: "28px Arial", color: 0xffffff });
        this.shareACourse = this.add.text(30, 300, 'Aktie A: '+shares.getCurrentSharePrice(0), { font: "28px Arial", color: 0xffffff });
        this.shareBCourse = this.add.text(30, 350, 'Aktie B: '+shares.getCurrentSharePrice(1), { font: "28px Arial", color: 0xffffff });
        this.shareCCourse = this.add.text(30, 400, 'Aktie C: '+shares.getCurrentSharePrice(2), { font: "28px Arial", color: 0xffffff });

    //Kanton
    this.kanton = this.add.sprite(800, 450, 'kantonWest');

    //Button1
    this.buttonBank1 = this.add.sprite(600, 600, 'buttonBank1').setInteractive();
    //Button2
    this.buttonBank2 = this.add.sprite(820, 490, 'buttonBank2').setInteractive();
    //Button3
    this.buttonBank3 = this.add.sprite(880, 320, 'buttonBank3').setInteractive();
    //Button Back
    this.buttonBack = this.add.sprite(1430, 840, 'buttonBack').setInteractive();
    //Button Help
    this.buttonHelp = this.add.sprite(1540, 840, 'buttonHelp').setInteractive();
    //Button Kaufen
    this.buttonBuy = this.add.sprite(130, 840, 'buttonBuy').setInteractive();

    this.buyText = this.add.text(50, 838, 'Investieren', { font: "30px Arial", color: 0xffffff });

    this.buttonBank1.on('pointerdown', function (event) {
    originScene='westScene';
    bankTypeChosen="genf";
        if(bank.getBankType(bankTypeChosen)==0){
            this.scene.start('einkaufenScene');
        }else{
            alert('Bank bereits gekauft!')
        }
    }, this);

    this.buttonBank2.on('pointerdown', function (event) {
    originScene='westScene';
    bankTypeChosen="bern";
        if(bank.getBankType(bankTypeChosen)==0){
            this.scene.start('einkaufenScene');
        }else{
            alert('Bank bereits gekauft!')
        }
    }, this);

    this.buttonBank3.on('pointerdown', function (event) {
    originScene='westScene';
    bankTypeChosen="basel";
        if(bank.getBankType(bankTypeChosen)==0){
            this.scene.start('einkaufenScene');
        }else{
            alert('Bank bereits gekauft!')
        }
    }, this);

    this.buttonBack.on('pointerdown', function (event) {
    this.scene.start('mainGameScene');
    }, this);

    this.buttonHelp.on('pointerdown', function (event) {
        shownText="Hier kannst du Banken in der Westschweiz kaufen";   
        originScene='westScene'; 
        this.scene.start('anleitungScene');
    }, this);

    this.buttonBuy.on('pointerdown', function (event) {
    originScene='westScene';
    this.scene.start('WS_kaufenScene');
    }, this);

  }
  update(){
        this.incomeStatsText.setText('Guthaben\: '+account.getMoney());
        this.shareACourse.setText('Aktie A: '+shares.getCurrentSharePrice(0));
        this.shareBCourse.setText('Aktie B: '+shares.getCurrentSharePrice(1));
        this.shareCCourse.setText('Aktie C: '+shares.getCurrentSharePrice(2));
  }
   
}

