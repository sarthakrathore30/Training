// Q3: Monthly Expense Tracker
// Order: food, travel, rent, bills, leisure
const expenses = [4500, 2000, 12000, 3000, 1500];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];            // assignment operator accumulates total
}
const average = total / expenses.length;

let finalAmount = total;
finalAmount += total * 0.10;       // add 10% tax

console.log(`Total expenses : ${total.toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Final (+10% tax): ${finalAmount.toFixed(2)}`);
