class Wallet {
    constructor() {
        this._balance = 0;
        this._transaction=[];
    }
    deposit(amount) {
        this._balance += amount;
        this._processDeposit(amount)
    }
    withdraw(amount) {
        if(amount>this._balance){
            console.log('You dont have enough fund');
            return;
        }
        this._processWithdraw(amount)
        this._balance -=amount;
    }
    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transaction.push({
            type:'deposit',
            amount
        })
    }
    _processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this._transaction.push({
            type:'withdraw',
            amount
        })
    }
    // getBalance(){
    //     return `New balance is: $${this._balance}`;
    // }
    //using getter method
    get balance(){
        return `New balance is: $${this._balance}`;
    }

    get transaction(){
        return this._transaction
    }
}
const wallet=new Wallet();
wallet.deposit(500);
wallet.withdraw(200);
// console.log(wallet.getBalance());

//using getter method
console.log(wallet.balance);
console.log(wallet.transaction);