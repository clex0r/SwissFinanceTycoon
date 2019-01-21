/*
file: shares.js
manages the pricecalculation of the shares
*/

var accountShare;


var startShare1;
var startShare2;
var startShare3;
var startShares;

var baseShare;

var share1;
var share2;
var share3;

var allShares;

var courseShare1;
var courseShare2;
var courseShare3;

var courses=[courseShare1,courseShare2,courseShare3];

var totalChange=0;

class Shares{
	constructor(account){
	accountShare=account;

	startShare1=500;
	startShare2=1000;
	startShare3=200;
	startShares=[startShare1,startShare2,startShare3];

	baseShare=1700;

	share1=500;
	share2=1000;
	share3=200;

	allShares=[share1,share2,share3];

	courseShare1=[];
	courseShare2=[];
	courseShare3=[];

	courses=[courseShare1,courseShare2,courseShare3];

	}

	 runShareMarket(){
		allShares.forEach(this.calculateSharePrices);


	}

	 calculateSharePrices(value,index,array){

		var oldPrice=value;

		var decision=Math.floor(Math.random() * 3);

		if(oldPrice>(startShares[index]*2)){
			var crash=Math.floor(Math.random() * 101);
			if(crash>95){
				//Börsencrash
			}
			else{
				decision=1;
			}		
		}

		if(oldPrice<(startShares[index]*0.1)){
			decision=2;
		}

		var total=allShares[0]+allShares[1]+allShares[2];

		var change=0;


		switch (decision) {
	    case 0:
	      	
	        break;
	    case 1:
	        if(total<baseShare){
	        	change=Math.floor(Math.random()*2);
	        	change=change*(-1);

	        }else{
	        	change=Math.floor(Math.random()*4);
	        	change=change*(-1);

	        }
	        break;
	    case 2:
	       	if(total>baseShare){
	        	change=Math.floor(Math.random()*2);

	        }else{
	        	change=Math.floor(Math.random()*4);

	        }
	        break;
	    }

	    var newPrice=(oldPrice/100)*(100+change);

	    newPrice=Math.floor(newPrice);

	    allShares[index]=newPrice;

	    decision=null;
	}

	getCurrentSharePrice(index){
		return allShares[index];
	}

	setCurrentSharePrice(index, value){
		allShares[index]=value;

	}

	getStartSharePrice(index){
		return startShares[index];
	}



}

