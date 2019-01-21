/*
file: time.js
manages all the time in the game
*/
var ticks;
var shares;
var obligations;
var houses;
var bank;
var randomEvent;
class Time{
	constructor(shares, obligations, houses, bank, randomEvent){
		this.shares=shares;
		this.obligations=obligations;
		this.houses=houses;
		this.bank=bank;
		randomEvent=randomEvent;
		ticks=0;
		setInterval(function(){

			//running the sharesmarket
			shares.runShareMarket();

			//running the obligation and house market
			if(ticks>1){
				obligations.runObligationMarket();
				houses.runHouseMarket();

				//running the bankprofit
				bank.runBankMarket();

				//Eventtriggering
				var chance=Math.floor(Math.random()*101);
				if(chance>=97){
					randomEvent.runRandomEvent();
					console.log("event triggered");
				}

					ticks=0;
			}

			ticks++;

		}, 5000);
	}
}

