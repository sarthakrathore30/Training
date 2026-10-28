"use strict";
// Q7: Smart Calculator

// Custom error types
class DivideByZeroError extends Error {
  constructor() { super("Cannot divide by zero"); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(value) { super(`Cannot take the square root of negative number ${value}`); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(operation) { super(`Unknown operation "${operation}"`); this.name = "InvalidOperationError"; }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new NegativeRootError(a);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(operation);
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function runAll(list, a, b) {
  console.log(`--- num1=${a}, num2=${b} ---`);
  for (const operation of list) {
    try {
      const result = calculate(operation, a, b);
      console.log(`${operation.padEnd(9)}: ${result}`);
    } catch (error) {
      console.log(`${operation.padEnd(9)}: ERROR (${error.name}) ${error.message}`);
    }
  }
}

runAll(operations, num1, num2);                // divide by 0 is caught
runAll(["root", "modulo"], -9, 3);             // negative root + unknown operation
