

class mainGameScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'mainGameScene' });
    }

    preload ()
    {
      this.load.image('logo', '././assets/images/logo3Small.png');
      this.load.image('schweiz', '././assets/images/schweizerkarte_15.png');
      this.load.image('buttonN_CH', '././assets/images/n-ch.png');
      this.load.image('buttonO_CH', '././assets/images/o-ch.png');
      this.load.image('buttonS_CH', '././assets/images/s-ch.png');
      this.load.image('buttonW_CH', '././assets/images/w-ch.png');
      this.load.image('buttonHelp', '././assets/images/hilfe.png');
      this.load.image('anzeige', '././assets/images/anzeigeSmall.png');
      this.load.image('buttonInvest', '././assets/images/basic.png');
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

        this.shareTitle = this.add.text(30, 250, 'Aktuelle Aktienpreise:', { font: "28px Arial", color: 0xffffff });
        this.shareACourse = this.add.text(30, 300, 'Aktie A: '+shares.getCurrentSharePrice(0), { font: "28px Arial", color: 0xffffff });
        this.shareBCourse = this.add.text(30, 350, 'Aktie B: '+shares.getCurrentSharePrice(1), { font: "28px Arial", color: 0xffffff });
        this.shareCCourse = this.add.text(30, 400, 'Aktie C: '+shares.getCurrentSharePrice(2), { font: "28px Arial", color: 0xffffff });

        //Schweizerkarte
        this.schweiz = this.add.sprite(800, 500, 'schweiz');
        //Button NCH
        this.buttonN_CH = this.add.sprite(820, 400, 'buttonN_CH').setInteractive();
        //Button OCH
        this.buttonO_CH = this.add.sprite(1000, 480, 'buttonO_CH').setInteractive();
        //Button SCH
        this.buttonS_CH = this.add.sprite(830, 580, 'buttonS_CH').setInteractive();
        //Button WCH
        this.buttonW_CH = this.add.sprite(600, 470, 'buttonW_CH').setInteractive();
        //Button Help
        this.buttonHelp = this.add.sprite(1540, 840, 'buttonHelp').setInteractive();
        //Kaufmenu
        this.buttonInvest = this.add.sprite(130, 840, 'buttonInvest').setInteractive();

        this.investText = this.add.text(50, 838, 'Investieren', { font: "30px Arial", color: 0xffffff });

        this.buttonN_CH.on('pointerdown', function (event) {     
        this.scene.start('nordScene');
        }, this);

        this.buttonO_CH.on('pointerdown', function (event) {     
        this.scene.start('eastScene');
        }, this);
        
        this.buttonS_CH.on('pointerdown', function (event) {     
        this.scene.start('southScene');
        }, this);

        this.buttonW_CH.on('pointerdown', function (event) {     
        this.scene.start('westScene');
        }, this);

        this.buttonHelp.on('pointerdown', function (event) { 
        shownText="Hier kannst du entweder in die Kantone zoomen oder in Wertanlagen investieren";   
        originScene='mainGameScene'; 
        this.scene.start('anleitungScene');
        }, this);

        this.buttonInvest.on('pointerdown', function (event) {  
        originScene='mainGameScene';   
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
