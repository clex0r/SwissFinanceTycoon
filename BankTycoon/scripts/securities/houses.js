var houseType1;
var houseType2;
var houseType3;
var houseType4;

var priceHouseType1;
var priceHouseType2;
var priceHouseType3;
var priceHouseType4;

var profitHouse1;
var profitHouse2;
var profitHouse3;
var profitHouse4;

var profits;

class Houses{
	constructor(account){

		profitHouse1=100;
		profitHouse2=200;
		profitHouse3=300;
		profitHouse4=500;

		profits=[profitHouse1,profitHouse2,profitHouse3,profitHouse4];

		priceHouseType1=1000;
		priceHouseType2=2000;
		priceHouseType3=4000;
		priceHouseType4=5000;

	}
	runHouseMarket(){

		houseType1=account.getHouses(0);
		houseType2=account.getHouses(1);
		houseType3=account.getHouses(2);
		houseType4=account.getHouses(3);

		var profit=(houseType1*profitHouse1)+(houseType2*profitHouse2)+(houseType3*profitHouse3)+(houseType4*profitHouse4);

		account.transaction(profit);

	}

	getCurrentHousePrice(houseType){
		switch(houseType){
			case 0:
				return priceHouseType1;
				break;
			case 1:
				return priceHouseType2;
				break;
			case 2:
				return priceHouseType3;
				break;
			case 3:
				return priceHouseType4;
				break;
		}

	}

	setCurrentHousePrice(houseType, price){
		switch(houseType){
			case 0:
				priceHouseType1=price;
				break;
			case 1:
				priceHouseType2=price;
				break;
			case 2:
				priceHouseType3=price;
				break;
			case 3:
				priceHouseType4=price;
				break;
		}
	}
	getHouseProfit(houseType){
		return profits[houseType];
	}



}