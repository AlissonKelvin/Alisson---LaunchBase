const users = [
    {
      name: "Salvio",
      recipes: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      recipes: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      recipes: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ];


function showMesage(users){
  for(let user of users) {
    
  const balance = caculateBalance(user.recipes, user.expenses);

  if(balance >0){

    console.log(`${users.name} has a positive balance of ${balance}`);

  }else{
    console.log(`${users.name} has a negative balance of ${balance}`);    
  }
  
  }

};

function caculateBalance(recipes, expenses){

  const sumRecipes = sumValues(recipes);
  const sumExpenses = sumValues(expenses);

  return sumRecipes - sumExpenses;

}

function sumValues(numbers){

  let sum = 0;

  for(let number of numbers){

    sum += number;

  }

  return sum;

}


showMesage(users);