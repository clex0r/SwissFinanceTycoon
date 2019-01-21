var eventAccount;
var eventShares;
var eventObligations;
var eventHouses;

class Events{
	constructor(account, shares, obligations){
		eventAccount=account;
		eventShares=shares;
		eventObligations=obligations;
		eventHouses=houses;
	}

	runRandomEvent(){

		var event=Math.floor(Math.random()*4);
		switch(event){
			case 0:
				this.runShareMarketCrash();
				break;
			case 1:
				this.runShareMarketBoost();
				break;
			case 2:
				this.runObligationMarketCrash();
				break;
			case 3:
				this.runObligationMarketBoost();
				break;
		}
		console.log(event);

	}

	runShareMarketCrash(){

		var share=Math.floor(Math.random()*3);
		var currentPrice=eventShares.getCurrentSharePrice(share);
		var crash=(Math.floor(Math.random()*20)+10);
		var newPrice=((currentPrice/100)*crash);
		eventShares.setCurrentSharePrice(newPrice);

	}

	runShareMarketBoost(){

		var share=Math.floor(Math.random()*3);
		var currentPrice=eventShares.getCurrentSharePrice(share);
		var boost=(Math.floor(Math.random()*20)+10);
		var newPrice=((currentPrice/100)*(100+boost));
		eventShares.setCurrentSharePrice(newPrice);

	}

	runObligationMarketCrash(){

		var obligation=Math.floor(Math.random()*3);
		var currentPrice=eventObligations.getCurrentObligationPrice(obligation);
		var crash=(Math.floor(Math.random()*20)+10);
		var newPrice=((currentPrice/100)*crash);
		eventObligations.setCurrentObligationPrice(newPrice);

	}

	runObligationMarketBoost(){
		
		var obligation=Math.floor(Math.random()*3);
		var currentPrice=eventObligations.getCurrentObligationPrice(obligation);
		var boost=(Math.floor(Math.random()*20)+10);
		var newPrice=((currentPrice/100)*(100+boost));
		eventObligations.setCurrentObligationPrice(newPrice);

	}
}