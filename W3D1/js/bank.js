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

        for(let i=0; i < this._accounts.length; i++){
            report += this._accounts[i].toString() + "\n";
        }
        
        return report.substring(0, report.length - 1);

        // for(account of this._accounts){
        //     report += account.toSring() + "\n";
        // }

        // this._accounts.reduce((report, account) => report += account.toString() + "\n", "");
    }

    endOfMonth() {
        let endReport = "";        
        let account;

        for(let i=0; i < this._accounts.length; i++){
            account = this._accounts[i];
            endReport += account.endOfMonth() + "\n";
            // endReport += this._accounts[i].endOfMonth() + "\n";
        }

        return endReport.substring(0, endReport.length - 1);
        
        // this._accounts.forEach(account => console.log(account.endOfMonth()));
        
        // for(account of this._accounts){
        //     endReport += account.endOfMonth() + "\n";
        // }
    }
}