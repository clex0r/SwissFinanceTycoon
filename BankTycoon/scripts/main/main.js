
var account=new Account();
var shares=new Shares(account);
var obligations=new Obligations(account);
var houses=new Houses(account);
var bank=new Bank(account);
var event=new Events(account, shares, obligations);

var time=new Time(shares, obligations, houses, bank, event);
var buySell=new BuySell(account, shares, obligations, houses, bank);

