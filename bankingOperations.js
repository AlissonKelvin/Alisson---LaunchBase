const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


function createTransaction(transactions){

  user.transactions.push(transactions);

  if(transactions.type =='credit'){

    user.balance += transactions.value;

  }
  else{

    user.balance -= transactions.value;

  }

}

/*report*/
function getHigherTransactionByType(type){

  let bigger;
  let auxiliary = 0;

  for (const transaction of user.transactions) {
    
    if( transaction.type === type && transaction.value > auxiliary){

      bigger = transaction;
      auxiliary = transaction.value;

    }
  }
  return bigger;
}

function getAverageTransactionValue(){
  let sum = 0;

  for (let transaction of user.transactions) {
    
    sum += transaction.value;

  }

  return sum / user.transactions.length;

}

function getTransactionsCount(){

  count = {
    credit: 0,
    debit:0
  };

  for (const transaction of user.transactions) {
    
    if(transaction.type ==='credit'){
      count.credit ++;
    }else{
      count.debit ++;
    }

  }
    return count;
}

console.table(user);

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70
console.log(getTransactionsCount()); // { credit: 2, debit: 2 }

