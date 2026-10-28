"use strict"; // strict mode: any undeclared variable would throw ReferenceError
// Q2: Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

function calculateBonus(employee) {
  // Missing property check (employee itself or its fields)
  if (!employee || employee.salary === undefined || employee.years === undefined) {
    throw new Error(`Missing property in record: ${JSON.stringify(employee)}`);
  }

  const salary = Number(employee.salary);
  const years = Number(employee.years);

  // Conversion check
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to numbers for ${employee.name}`);
  }

  // 10% bonus when years > 3, otherwise 5%
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: employee.name, salary, years, bonus };
}

// The first three are valid; the last two deliberately trigger the catch block
const testRecords = [
  ...employees,
  { name: "Ravi" },                               // missing properties
  { name: "Zed", salary: "abc", years: "2" },     // bad conversion
];

for (const record of testRecords) {
  try {
    const { name, salary, years, bonus } = calculateBonus(record);
    console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)} | Total: ${(salary + bonus).toFixed(2)}`);
  } catch (error) {
    console.log(`Error (${error.name}): ${error.message}`);
  }
}
