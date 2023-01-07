
let caixa = {
    incomes: [2000, 150, 602, 58],
    expenses: [3000, 2]
};


function sum(array){
   let total = 0;
   for(let value of array){
       total += value;
   }
   return total;
}

function calculateBalance(caixa){
   let calculateIncomes = sum(caixa.incomes);
   let calculateExpenses = sum(caixa.expenses);
   let total = calculateIncomes - calculateExpenses;
   console.log('o resultado foi ' + total)
}
calculateBalance(caixa);


