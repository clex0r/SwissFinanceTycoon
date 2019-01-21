var state;
var bankAccount;
var locations;

var profitBank1;
var profitBank2;
var profitBank3;

var priceBank1;
var priceBank2;
var priceBank3;


class Bank{
	constructor(account){
		bankAccount=account;
		locations=["zurich","luzern","uri","thurgau","stgallen","graubunden", "sudwallis","nordwallis","tessin","genf","bern","basel"];
		state=[0,0,0,0,0,0,0,0,0,0,0,0];

		profitBank1=300;
		profitBank2=500;
		profitBank3=800;

		priceBank1=4000;
		priceBank2=9000;
		priceBank3=15000;

	}

	runBankMarket(){

		var amountBank1=bankAccount.getBank(1);
		var amountBank2=bankAccount.getBank(2);
		var amountBank3=bankAccount.getBank(3);

		var profit=(amountBank1*profitBank1)+(amountBank2*profitBank2)+(amountBank3*profitBank3);

		bankAccount.transaction(profit);

	}

	buyBank(location, bankType){

		var index=locations.indexOf(location);
		console.log(state[index]);
		if(state[index]==0){

			var cost=0;
			switch(bankType){
		        case 1:
		        	cost=priceBank1;
		          	break;
		        case 2:
		          	cost=priceBank2;
		          	break;
		        case 3:
		          	cost=priceBank3;
		          	break;
	      	}
	      	var balance=bankAccount.getMoney();
	      	if(balance>=cost){
	      		state[index]=bankType;
				bankAccount.addBank(bankType);
	      		bankAccount.removeMoney(cost);
	      				var winCount=0;
						state.forEach(function(element){
							if(element==0){
								winCount++;
							}
						}
						);
						if(winCount==0){
							alert('Gratulation, du hast alle Banken gekauft!');
						}
	      		return true;
	      	}
	      	else{
	      		alert('Zu wenig guthaben!');
	      		return false;
	      	}
		}else{
			return false;
		}

		
	}
	getBankType(location){
		var index=locations.indexOf(location);
		return state[index];
		
	}

}