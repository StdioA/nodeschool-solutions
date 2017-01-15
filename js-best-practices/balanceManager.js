
module.exports = {
  balance: 0,
  decreaseBalance: function(amount){
    let errorMessage;
    if(!this.canAfford(amount)){
        errorMessage = "Insufficient balance";
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    this.balance -= amount;
  },

  getBalance: function(){ 
    return this.balance;
  },

  increaseBalance: function(amount){
    this.balance += amount;
  },

  canAfford: function(amount){
    let errorMessage;
    if(!this.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= this.balance;
  },

  isValidAmount: function (amount) {
    return !Object.is(amount, undefined);
  }
};
