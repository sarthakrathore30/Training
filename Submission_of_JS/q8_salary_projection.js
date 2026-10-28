// Q8: Employee Salary Projection
let salary = 50000;          // current salary
const incrementRate = 8;     // annual increment in %

const projection = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * (incrementRate / 100);   // assignment operator
  projection.push({
    Year: year,
    Salary: Math.round(salary),
  });
}

console.table(projection);
