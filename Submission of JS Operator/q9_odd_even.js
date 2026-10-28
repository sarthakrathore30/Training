// Q9: Odd-Even Number Analyzer

// Build array of numbers 1-30 using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Classify each number and store the result
const results = [];
for (const num of numbers) {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log(results);
