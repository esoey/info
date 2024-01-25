class BankAccount{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

deposit(amount){
    this.balance = this.balance + amount
}

withdraw(amount){
    if (this.balance >= amount){
        this.balance = this.balance - amount;
        return true
    }
    else {
        console.log("Insufficient funds!")
        return false
    }
}
}