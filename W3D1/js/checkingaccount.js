class CheckingAccount extends Account{
    constructor(number, overdraftLimit){
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit){
        if(overdraftLimit < 0.0){
            throw new RangeError("Overdraft limit has to be greater than or equal to zero");
        }

        return this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraftLimit) {
            throw Error(`Insufficient funds: Your current balance is ${this._balance}. Your overdraft limit is ${this._overdraftLimit}.`);
        }
        
        this._balance -= amount;

        // if(this._balance < 0){
        //     this._overdraftLimit -= this._balance;
        // }

        // if(amount > this._balance){
        //     this._overdraftLimit = this._balance - amount;
        // }
        
        // this._balance -= amount;

        // if(amount > this._balance){
        //     this._overdraftLimit -= this._balance - amount;
        //     amount = this._balance;
        // }
        
        // super.withdraw(amount);
    }

    toString(){
        return `Checking account ${this._number}: balance ${this._balance} and an overdraft limit of ${this._overdraftLimit}.`;
    }

    endOfMonth() {
        if(this._balance < 0){
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
        }
        
        return "";
    }
}