
class einkaufenScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'einkaufenScene' });
    }

    preload ()
    {
      this.load.image('logo', 'assets/images/logo3Small.png')
      this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
      this.load.image('buttonHelp', 'assets/images/hilfe.png')
      this.load.image('buttonBack', 'assets/images/back.png')
      this.load.image('buttonRetail', 'assets/images/retail.png')
      this.load.image('buttonPrivate', 'assets/images/private.png')
      this.load.image('buttonInvestment', 'assets/images/investment.png')
      this.load.image('kaufAnzeige', 'assets/images/popUp.png')

    }

    create ()
    {
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
      this.buttonRetail = this.add.sprite(300, 700, 'buttonRetail').setInteractive();
      //Kaufbutton Private
      this.buttonPrivate = this.add.sprite(530, 700, 'buttonPrivate').setInteractive();
      //Kaufbutton Investment
      this.buttonInvestment = this.add.sprite(760, 700, 'buttonInvestment').setInteractive();
      //Kaufen Text
      this.kaufenText = this.add.text(200, 400, 'Gegenstand: Bank in '+bankTypeChosen, { font: "30px Arial", color: 0xffffff });
      this.preisText = this.add.text(200, 450, 'Preis: Retail: 4000, Private: 9000, Investement: 15000', { font: "30px Arial", color: 0xffffff });

      this.buttonBack.on('pointerdown', function (event) {
        this.scene.start(originScene);
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst dich entscheiden, welche art Bank du an diesem Standort kaufen möchtest. Achtung, du kannst nur einmal kaufen, danach ist keine änderung mehr möglich! Die Banken bringen alle verschieden viel Profit"; 
        this.scene.start('anleitungScene');
        }, this);

      this.buttonRetail.on('pointerdown', function (event) {   
        buySell.buyBank(bankTypeChosen,1);
        bankTypeChosen=""; 
        this.scene.start(originScene);
        }, this);

      this.buttonPrivate.on('pointerdown', function (event) {
        buySell.buyBank(bankTypeChosen,2);
        bankTypeChosen="";     
        this.scene.start(originScene);
        }, this);

      this.buttonInvestment.on('pointerdown', function (event) {     
        buySell.buyBank(bankTypeChosen,3);
        bankTypeChosen="";     
        this.scene.start(originScene);
        }, this);

    }
    update(){
        this.incomeStatsText.setText('Guthaben\: '+account.getMoney())
    }


}
