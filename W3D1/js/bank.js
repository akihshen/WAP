class Bank{
    static nextNumber = 1;

    constructor(){
        this._accounts = [];
    }
    
    addAccount(){
        this._accounts.push(new Account(Bank.nextNumber));
        return Bank.nextNumber++;
    }
    
    addSavingsAccount(interest){
        this._accounts.push(new SavingsAccount(Bank.nextNumber, interest));
        return Bank.nextNumber++;
    }
    
    addCheckingAccount(overdraftLimit){
        this._accounts.push(new CheckingAccount(Bank.nextNumber, overdraftLimit));
        return Bank.nextNumber++;
    }
    
    closeAccount(number){
        let index = this._accounts.findIndex(account => account.getNumber() === number);

        if(index < 0){
            return false;
        }

        this._accounts.splice(index, 1);        
        return true;
    }
    
    accountReport(){
        let report = "";        
        this._accounts.forEach(account => report += account.toString() + "\n");
        // this._accounts.reduce((report, account) => report + account.toString() + "\n", "");
        
        return report.trim();
    }

    endOfMonth() {
        let endReport = "";        
        this._accounts.forEach(account => endReport += account.endOfMonth() + "\n");
        
        return endReport.trim();
    }
}