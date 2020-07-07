describe("Tests Account Class", function(){
    let account = new Account(Bank.nextNumber);
    
    it("The account numbers is 1", function(){
        assert.equal(account.getNumber(), 1);
    });
    
    it("The account balance is 0.0", function(){
        assert.equal(account.getBalance(), 0.0);
    });
    
    it("Tries to deposite -100.00 and throws an exception", function(){
        assert.throw(() => account.deposit(-100.00), RangeError, "Deposit amount has to be greater than zero");
    });
    
    it("Deposites 100.00 and the balance should be 100.00.", function(){
        account.deposit(100.00);
        assert.equal(account.getBalance(), 100.00);
    });
    
    it("Tries to withdraw -50.00 and throws an exception", function(){
        assert.throw(() => account.withdraw(-50.00), RangeError, "Withdraw amount has to be greater than zero");
    });
    
    it("After withdrawing 50.00 the account balance should be 50.0", function(){
        account.withdraw(50.00);
        assert.equal(account.getBalance(), 50.0);
    });

    it("Displays the account information", function(){
        assert.equal(account.toString(), "Account 1: balance 50");
    });

    it("Performs end of month tasks", function(){
        assert.equal(account.endOfMonth(), "");
    });
});

describe("Tests Saving Account Class", function(){
    let savingsAccount = new SavingsAccount(Bank.nextNumber, 1.25);
    savingsAccount.deposit(1000.00);
    
    it("Checks if the interest rate is 1.25%", function(){
        assert.equal(savingsAccount.getInterestRate(), 1.25);
    })

    it("Tries to set the interest rate to be -1.00% and throws an exception", function(){
        assert.throw(() => savingsAccount.setInterestRate(-1.00), RangeError, "Interest rate has to be greater than zero");
    })

    it("Sets the interest rate to 1.55%", function(){
        savingsAccount.setInterestRate(1.55);
        assert.equal(savingsAccount.getInterestRate(), 1.55);
    })

    it("Adds interest and checks if balanace is 1015.5000000000001", function(){
        savingsAccount.addInterest();
        assert.equal(savingsAccount.getBalance(), 1015.5000000000001);
    })

    it("Displays the saving account information", function(){
        assert.equal(savingsAccount.toString(), "Saving account 1: balance 1015.5000000000001 at interest rate of 1.55");
    });

    it("Performs end of month tasks", function(){
        assert.equal(savingsAccount.endOfMonth(), "Interest added SavingsAccount 1: balance: 1031.2402500000003 interest: 1.55");
    });
});

describe("Tests Checking Account Class", function(){
    let checkingAccount = new CheckingAccount(Bank.nextNumber, 0.00);
    checkingAccount.deposit(50000.00);

    it("Checks if the overdraft limit is 0.00", function(){
        assert.equal(checkingAccount.getOverdraftLimit(), 0.00);
    });

    it("Tries to set the overdraft limit to -1,000.00 and throws exception", function(){
        assert.throw(() => checkingAccount.setOverdraftLimit(-1000.00), RangeError, "Overdraft limit has to be greater than or equal to zero");
    });

    it("Sets the overdraft limit to 1,000.00", function(){
        checkingAccount.setOverdraftLimit(1000.00);
        assert.equal(checkingAccount.getOverdraftLimit(), 1000.00);
    });
    
    it("Tries to withdraw -50.00 and throws an exception", function(){
        assert.throw(() => checkingAccount.withdraw(-50.00), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("With current balance of 50,000.00, making a withdrawal 40,000.00 and should have a balance of 10,000.00", function(){
        checkingAccount.withdraw(40000);
        assert.equal(checkingAccount.getBalance(), 10000.00);
    });

    it("Withdraws another 10,600.00 and should have a balance of -600.00", function(){
        checkingAccount.withdraw(10600);
        assert.equal(checkingAccount.getBalance(), -600.00);
    });

    // it("Checks if the remaining overdraft limit is -400.00", function(){
    //     assert.equal(checkingAccount.getOverdraftLimit(), -400.00);
    // })

    it("Tries to withdraw beyond the overdraft limit and throws exception.", function(){
        assert.throw(() => checkingAccount.withdraw(1000.00), Error, "Insufficient funds: Your current balance is -600. Your overdraft limit is 1000.");
    });

    it("Displays the checking account information", function(){
        assert.equal(checkingAccount.toString(), "Checking account 1: balance -600 and an overdraft limit of 1000.");
    });

    it("Performs end of month tasks", function(){
        assert.equal(checkingAccount.endOfMonth(), "Warning, low balance CheckingAccount 1: balance: -600 overdraft limit: 1000");
    });
    
});

describe("Bank Test", function(){
    let bank = new Bank();

    it("Creates an Account and checks if its account number is 1", function(){
        assert.equal(bank.addAccount(), 1);
    });

    it("Creates a Savings Account and checks if its account number is 2", function(){
        assert.equal(bank.addSavingsAccount(1.55), 2);
    });

    it("Creates a Checking Account and checks if its account number is 3", function(){
        assert.equal(bank.addCheckingAccount(2500), 3);
    });

    it("Tries to close a non-existing account and it returns false.", function(){
        assert.equal(bank.closeAccount(4), false);
    });

    it("Closes an existing account", function(){
        assert.equal(bank.closeAccount(2), true);
    });

    it("Generates accounts report", function(){
        assert.equal(bank.accountReport(), "Account 1: balance 0\nChecking account 3: balance 0 and an overdraft limit of 2500.");
    });

    it("Performs end of month tasks - account status is okay.", function(){
        assert.equal(bank.endOfMonth(), "");
    });

    it("Performs end of month tasks - CheckingAccount run overdraft.", function(){
        bank._accounts[1].withdraw(1000);
        assert.equal(bank.endOfMonth(), "Warning, low balance CheckingAccount 3: balance: -1000 overdraft limit: 2500");
    });

    it("Performs end of month tasks - CheckingAccount run overdraft and added interest to SavingsAccount.", function(){
        bank.addSavingsAccount(0.25);
        bank._accounts[2].deposit(500);
        assert.equal(bank.endOfMonth(), "Warning, low balance CheckingAccount 3: balance: -1000 overdraft limit: 2500\nInterest added SavingsAccount 4: balance: 501.25 interest: 0.25");
    });
});