// Q1: Scope Conflict Resolver

// Global variable: visible everywhere in the script
var bonus = 5000;

function calculateSalary(permanentStatus) {
  // Local variables: exist only inside this function
  const salary = 40000;
  const isPermanent = permanentStatus;

  let totalSalary = salary;
  if (isPermanent) {
    totalSalary += bonus; // reads the global bonus
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${totalSalary}`);
}

// Changing isPermanent changes only the local result, never the global bonus
calculateSalary(true);   // 45000
calculateSalary(false);  // 40000

console.log(`Global bonus after both calls: ${bonus}`); // still 5000

// Local variables are not accessible outside the function
console.log(`typeof salary outside function: ${typeof salary}`);       // undefined
console.log(`typeof isPermanent outside function: ${typeof isPermanent}`); // undefined
