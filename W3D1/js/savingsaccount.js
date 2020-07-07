class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterestRate(){
        return this._interest;
    }

    setInterestRate(interest){
        if(interest <= 0){
            throw new RangeError("Interest rate has to be greater than zero");
        }

        this._interest = interest;
    }

    addInterest(){
        this._balance *= (1.00 + this._interest / 100.00);
    }

    toString(){
        return `Saving account ${this._number}: balance ${this._balance} at interest rate of ${this._interest}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }
}