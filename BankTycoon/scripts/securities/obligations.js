/*
file: Obligations.js
manages the pricecalculation of the Obligations
*/

var accountObligation;


var startObligation1;
var startObligation2;
var startObligation3;
var startObligations;

var baseObligation;

var Obligation1;
var Obligation2;
var Obligation3;

var allObligations;

var totalChange=0;

class Obligations{
	constructor(account){
	accountObligation=account;

	startObligation1=500;
	startObligation2=1000;
	startObligation3=200;
	startObligations=[startObligation1,startObligation2,startObligation3];

	baseObligation=1700;

	Obligation1=500;
	Obligation2=1000;
	Obligation3=200;

	allObligations=[Obligation1,Obligation2,Obligation3];


	totalChange=0;
	}

	 runObligationMarket(){
		allObligations.forEach(this.calculateObligationPrices);
	}

	 calculateObligationPrices(value,index,array){

		var oldPrice=value;

		var decision=Math.floor(Math.random() * 11);
		if(decision<=3){
			decision=0;
		} else if(decision>3&&decision<=8){
			decision=2;
		}else{
			decision=1;
		}

		if(oldPrice>(startObligations[index]*3)){
			var crash=Math.floor(Math.random() * 101);
			if(crash>95){
				//Börsencrash
			}
			else{
				decision=1;
			}		
		}

		if(oldPrice<(startObligations[index]*0.1)){
			decision=2;
		}

		var total=allObligations[0]+allObligations[1]+allObligations[2];

		var change=0;


		switch (decision) {
	    case 0:
	      	
	        break;
	    case 1:
	        if(total<baseObligation){
	        	change=Math.floor(Math.random()*1);
	        	change=change*(-1);

	        }else{
	        	change=Math.floor(Math.random()*2);
	        	change=change*(-1);

	        }
	        break;
	    case 2:
	       	if(total>baseObligation){
	        	change=Math.floor(Math.random()*2);

	        }else{
	        	change=Math.floor(Math.random()*4);

	        }
	        break;
	    }



	    var newPrice=(oldPrice/100)*(100+change);

	    newPrice=Math.floor(newPrice);

	    allObligations[index]=newPrice;

	    decision=null;
	}

	getCurrentObligationPrice(index){
		return allObligations[index];
	}

	setCurrentObligationPrice(index, value){
		allObligations[index]=value;
	}

	getStartObligationPrice(index){
		return startObligations[index];
	}



}


