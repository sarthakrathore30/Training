// Q6: Event-Based Counter Simulation
let count = 0; // shared by the functions below

function increment() {
  count++;
  console.log(`Incremented -> count = ${count}`);
}

function decrement() {
  count--;
  console.log(`Decremented -> count = ${count}`);
}

// Nested function: the inner function can read and update the
// outer function's local count via closure (function scope)
function createScopedCounter() {
  let localCount = 100;

  function bump(by) {
    localCount += by; // inner function updates outer variable
    console.log(`Scoped counter -> ${localCount}`);
  }

  bump(1);
  bump(1);
  bump(-1);
}

// Simulate click events
console.log("Simulating clicks:");
increment();
increment();
increment();
decrement();

console.log("\nNested function demo:");
createScopedCounter();
console.log(`Global count is unaffected: ${count}`);
