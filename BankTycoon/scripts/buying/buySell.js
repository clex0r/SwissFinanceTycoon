var buySellAccount;
var buySellShares;
var buySellObligations;
var buySellHouses;
var buySellBank;

class BuySell{
	constructor(account, shares, obligations, houses, bank){
		buySellAccount=account;
		buySellShares=shares;
		buySellObligations=obligations;
		buySellHouses=houses;
		buySellBank=bank;

	}

	//Shares

	buyShare(shareType, amount){
		var balance=buySellAccount.getMoney();
		var currentPrice= buySellShares.getCurrentSharePrice(shareType);

		var totalPrice=currentPrice*amount;

		if(balance<totalPrice){
			return false;
		} else{
			buySellAccount.removeMoney(totalPrice);
			buySellAccount.addShare(shareType, amount);

		}
	}

	sellShare(shareType, amount){
		var balance=buySellAccount.getMoney();
		var currentPrice= buySellShares.getCurrentSharePrice(shareType);
		var balanceShares=buySellAccount.getShares(shareType);

		var totalPrice=currentPrice*amount;

		if(balanceShares<amount){
			return false;
		} else{
			buySellAccount.addMoney(totalPrice);
			buySellAccount.removeShare(shareType, amount);

		}

	}

	//Obligations

	buyObligation(obligationType, amount){
		var balance=buySellAccount.getMoney();
		var currentPrice= buySellObligations.getCurrentObligationPrice(obligationType);

		var totalPrice=currentPrice*amount;

		if(balance<totalPrice){
			return false;
		} else{
			buySellAccount.removeMoney(totalPrice);
			buySellAccount.addObligation(obligationType, amount);

		}
	}

	sellObligation(obligationType, amount){
		var balance=buySellAccount.getMoney();
		var currentPrice= buySellObligations.getCurrentObligationPrice(obligationType);
		var balanceObligation=buySellAccount.getObligations(obligationType);

		var totalPrice=currentPrice*amount;

		if(balanceObligation<amount){
			return false;
		} else{
			buySellAccount.addMoney(totalPrice);
			buySellAccount.removeObligation(obligationType, amount);

		}

	}

	//Houses

	buyHouse(houseType, amount){
		var balance=buySellAccount.getMoney();
		var currentPrice=buySellHouses.getCurrentHousePrice(houseType);

		var totalPrice=currentPrice*amount;

		if(balance<totalPrice){
			return false;
		}else{
			buySellAccount.removeMoney(totalPrice);
			buySellAccount.addHouse(houseType, amount);
		}

	}

	//Bank

	buyBank(location, bankType){
		buySellBank.buyBank(location, bankType);

	}




}