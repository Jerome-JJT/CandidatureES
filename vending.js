
//Store an item's name and price
class Item
{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}



//Store machine's stored items, balance and total funds
class VendingMachine
{
  constructor(stock) {
    this.stock = stock;

    //Store current balance
    this.balance = 0;
    //Store money from sold items
    this.fund = 0;

    this.logs = [];
  }

  //Add money to thet balance
  Insert(amount)
  {
    this.balance+=amount;
  }

  //Try to sell an item
  Choose(code)
  {
    //Existing item verificatiom
    if(this.stock[code] !== undefined)
    {
      //Enough quantity verification
      if(this.stock[code].qty > 0)
      {
        //Enough balance for price verification
        if(this.balance >= this.stock[code].item.price)
        {
          this.stock[code].qty -= 1;

          //Reduce balance and increase fund with item price
          this.balance = javascriptRound(this.balance - this.stock[code].item.price);
          this.fund = javascriptRound(this.fund + this.stock[code].item.price);

          //Get hour to use, get modified hour here
          let useHour = isNaN(localHour) ? (new Date).getHours() : localHour;

          //Get log entry index for this hour, equal -1 if not exists
          let hourIndex = this.logs.findIndex(function(val) {return val['hour'] == useHour});


          //If this hour already has an log entry, increase entry amount
          if(hourIndex != -1)
          {
            this.logs[hourIndex]['amount'] = javascriptRound(this.logs[hourIndex]['amount'] + this.stock[code].item.price);
          }
          //Else, create log entry
          else
          {
            this.logs.push({hour: useHour, amount: this.stock[code].item.price});
          }

          return "Vending " + this.stock[code].item.name;
        }
        else
        {
          return "Not enough money!";
        }
      }
      else
      {
        return "Item "+this.stock[code].item.name+": Out of stock!";
      }
    }
    else
    {
      return "Invalid selection!";
    }
  }

  //Return current balance
  GetChange()
  {
    return this.balance;
  }

  //Return total price of sold items
  GetBalance()
  {
    return this.fund;
  }

  GetLogs()
  {
    //Get log list, sort by amount, get 3 biggest amounts
    let display = this.logs;
    display.sort(function(a, b) {return a['amount'] < b['amount']});
    display = display.slice(0, 3);

    //Print 3 biggest amounts and hours
    display.forEach(function(val) {console.log("Hour " + val['hour'] + " generated a revenue of " + val['amount'])});
  }
}
