var count;

class houseBuySpecificScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'houseBuySpecificScene' });
  }

  preload(){
    this.load.image('logo', 'assets/images/logo3Small.png')
    this.load.image('anzeige', 'assets/images/anzeigeSmall.png')
    this.load.image('buttonHelp', 'assets/images/hilfe.png')
    this.load.image('buttonBack', 'assets/images/back.png')

    this.load.image('kaufAnzeige', 'assets/images/popUp.png')
    this.load.image('buyButtonShare', 'assets/images/buyButton.png')
   // this.load.image('sellButtonShare', 'assets/images/sellButton.png')
    this.load.image('buttonMinus', 'assets/images/minus.png')
    this.load.image('buttonPlus', 'assets/images/plus.png')
    count=0;

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

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start(originScene);
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        this.scene.start('anleitungScene');
        }, this);
    
      this.buttonBuy = this.add.sprite(760, 700, 'buyButtonShare').setInteractive();
     // this.buttonSell = this.add.sprite(350, 700, 'sellButtonShare').setInteractive();
      //Kaufen Text
      this.kaufenText = this.add.text(200, 400, 'Haustyp: '+shownText, { font: "30px Arial", color: 0xffffff });
      this.preisText = this.add.text(200, 450, 'aktueller Preis: '+houses.getCurrentHousePrice(securityTypeChosen), { font: "30px Arial", color: 0xffffff });  
      this.profitText = this.add.text(200, 500, 'Profit eines Hauses: '+houses.getHouseProfit(securityTypeChosen), { font: "30px Arial", color: 0xffffff });    
      this.anzahlText = this.add.text(200, 550, 'Anzahl: '+count, { font: "30px Arial", color: 0xffffff });
      this.userText = this.add.text(200, 600, 'Ihre Häuser: '+account.getHouses(securityTypeChosen), { font: "30px Arial", color: 0xffffff });

      //Anzal Buttons
      this.buttonMinus = this.add.sprite(600, 570, 'buttonMinus').setInteractive();

      this.buttonPlus = this.add.sprite(700, 570, 'buttonPlus').setInteractive();

      this.buttonBack.on('pointerdown', function (event) {     
        this.scene.start('houseBuyScene');
        }, this);

      this.buttonHelp.on('pointerdown', function (event) {     
        shownText="Hier kannst du dich entscheiden, wieviele Häuser des gewählten Typs du kaufen möchtest"; 
        this.scene.start('anleitungScene');
        }, this);

      

      this.buttonPlus.on('pointerdown', function (event) {   
        count++;
      })

      this.buttonMinus.on('pointerdown', function (event) {     
          if(count>0){        
          count--;  
          }else{
          alert('Keine negative Anzahl möglich')
          }
        }, this);

      this.buttonBuy.on('pointerdown', function (event) {   
        var price=count*houses.getCurrentHousePrice(securityTypeChosen);
        if(price>account.getMoney()){
          alert('Nicht genügend Guthaben');
          count=0;
        }else{
          buySell.buyHouse(securityTypeChosen,count);
          count=0;
        }
      })
    }
    


    
    update(){
        this.incomeStatsText.setText('Guthaben\: '+account.getMoney());
        this.preisText.setText('aktueller Preis: '+houses.getCurrentHousePrice(securityTypeChosen));
        this.anzahlText.setText('Anzahl: '+count);
        this.userText.setText('Ihre Häuser: '+account.getHouses(securityTypeChosen));
    }


}