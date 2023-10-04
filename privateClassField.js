// class Wallet {
//     #balance=0;
//     #transaction=[];

//     deposit(amount) {
//         this.#balance += amount;
//         this.#processDeposit(amount)
//     }
//     withdraw(amount) {
//         if(amount>this.#balance){
//             console.log('You dont have enough fund');
//             return;
//         }
//         this.#processWithdraw(amount)
//         this.#balance -=amount;
//     }
//     #processDeposit(amount){
//         console.log(`Depositing ${amount}`);

//         this.#transaction.push({
//             type:'deposit',
//             amount
//         })
//     }
//     #processWithdraw(amount){
//         console.log(`Withdrawing ${amount}`);

//         this.#transaction.push({
//             type:'withdraw',
//             amount
//         })
//     }
//     // getBalance(){
//     //     return `New balance is: $${this.#balance}`;
//     // }
//     //using getter method
//     get balance(){
//         return `New balance is: $${this.#balance}`;
//     }

//     get transaction(){
//         return this.#transaction
//     }
// }
// const wallet=new Wallet();
// wallet.deposit(500);
// wallet.withdraw(350);
// // console.log(wallet.getBalance());

// //using getter method
// console.log(wallet.balance);
// console.log(wallet.transaction);