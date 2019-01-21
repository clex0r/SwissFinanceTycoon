/*
file: account.js
the useraccount is managed here
*/

var money;

//Shares
var Share1Account;
var Share2Account;
var Share3Account;

//Obligations
var Obligation1Account;
var Obligation2Account;
var Obligation3Account;

//Houses
var houseType1Account;
var houseType2Account;
var houseType3Account;
var houseType4Account;

//Bank
var bank1Account;
var bank2Account;
var bank3Account;


class Account {
  constructor() {
  	money=5000;
    Share1Account=0;
    Share2Account=0;
    Share3Account=0;

    Obligation1Account=0;
    Obligation2Account=0;
    Obligation3Account=0;

    houseType1Account=0;
    houseType2Account=0;
    houseType3Account=0;
    houseType4Account=0;

    bank1Account=0;
    bank2Account=0;
    bank3Account=0;
  }
  addMoney(value){
  		var amount=value;
  		if(value<0){
  			amount=amount*(-1);
  		}
  		money=money+amount;
  	}

  removeMoney(value){
  		var amount=value;
  		if(value>0){
  			amount=amount*(-1);
  		}
  		money=money+amount;
  }

  transaction(value){
      money=money+value;
    }

    getMoney(){
      return money;
  }

  addShare(shareType, amount){
    switch (shareType) {
      case 0:
          Share1Account=Share1Account+amount;
          break;
      case 1:
          Share2Account=Share2Account+amount;
          break;
      case 2:
          Share3Account=Share3Account+amount;
          break;
    }
  }

  removeShare(shareType,amount){
    switch (shareType) {
      case 0:
        if(amount>Share1Account){
          break;
        }
          Share1Account=Share1Account-amount;
          break;
      case 1:
          if(amount>Share2Account){
            break;
          }
        Share2Account=Share2Account-amount;
        break;
      case 2:
         if(amount>Share3Account){
            break;
          }
        Share3Account=Share3Account-amount;
        break; 
    }
  }

  getShares(shareType){
      switch (shareType) {
      case 0:
          return Share1Account;
          break;
      case 1:
          return Share2Account;
          break;
      case 2:
          return Share3Account;
          break;
      }
  }

    //Obliagtionsparts

    addObligation(obligationType, amount){
      switch (obligationType) {
      case 0:
          Obligation1Account=Obligation1Account+amount;
          break;
      case 1:
          Obligation2Account=Obligation2Account+amount;
          break;
      case 2:
          Obligation3Account=Obligation3Account+amount;
          break;
      }
    }

    removeObligation(obligationType,amount){
      switch (obligationType) {
      case 0:
        if(amount>Obligation1Account){
          break;
        }
          Obligation1Account=Obligation1Account-amount;
          break;
      case 1:
          if(amount>Obligation2Account){
            break;
          }
        Obligation2Account=Obligation2Account-amount;
        break;
      case 2:
         if(amount>Obligation3Account){
            break;
          }
        Obligation3Account=Obligation3Account-amount;
        break; 
      }
    }

    getObligations(obligationType){
      switch (obligationType) {
      case 0:
          return Obligation1Account;
          break;
      case 1:
          return Obligation2Account;
          break;
      case 2:
          return Obligation3Account;
          break;
      }
    }

        //Housepart

    addHouse(houseType, amount){
      switch (houseType) {
      case 0:
          houseType1Account=houseType1Account+amount;
          break;
      case 1:
          houseType2Account=houseType2Account+amount;
          break;
      case 2:
          houseType3Account=houseType3Account+amount;
          break;
      case 3:
          houseType4Account=houseType4Account+amount;
          break;
      }
    }

    removeHouse(houseType,amount){
      switch (houseType) {
      case 0:
        if(amount>houseType1Account){
          break;
        }
          houseType1Account=houseType1Account-amount;
          break;
      case 1:
          if(amount>houseType2Account){
            break;
          }
        houseType2Account=houseType2Account-amount;
        break;
      case 2:
         if(amount>houseType3Account){
            break;
          }
        houseType3Account=houseType3Account-amount;
        break; 
      case 3:
         if(amount>houseType4Account){
            break;
          }
        houseType4Account=houseType4Account-amount;
        break; 
      }
    }

    getHouses(houseType){
      switch (houseType) {
      case 0:
          return houseType1Account;
          break;
      case 1:
          return houseType2Account;
          break;
      case 2:
          return houseType3Account;
          break;
      case 3:
          return houseType4Account;
          break;
      }
    }

    addBank(bankType){
      switch(bankType){
        case 1:
          bank1Account++;
          break;
        case 2:
          bank2Account++;
          break;
        case 3:
          bank3Account++;
          break;
      }
    }
    getBank(bankType){
            switch(bankType){
        case 1:
          return bank1Account;
          break;
        case 2:
          return bank2Account;
          break;
        case 3:
          return bank3Account;
          break;
      }
    }
  }

