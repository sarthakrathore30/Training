"use strict";
// Q3: Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

// Custom error classes so each failure type can be categorized
class NegativeAmountError extends Error {
  constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullEntryError extends Error {
  constructor(message) { super(message); this.name = "NullEntryError"; }
}

function validate(transaction) {
  if (transaction === null) throw new NullEntryError("Transaction entry is null");
  if (transaction.id === undefined || transaction.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount: ${JSON.stringify(transaction)}`);
  }
  if (transaction.amount < 0) {
    throw new NegativeAmountError(`Negative amount (${transaction.amount}) in id ${transaction.id}`);
  }
  return transaction;
}

const valid = [];
const invalid = [];
const errorCategories = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [] };

for (let i = 0; i < transactions.length; i++) {
  // BREAKPOINT: with the debugger attached, execution pauses here so you can
  // watch i, transactions[i], valid and invalid. It does nothing in plain Node.
  debugger;
  try {
    valid.push(validate(transactions[i]));
  } catch (error) {
    invalid.push({ index: i, type: error.name, message: error.message });
    if (errorCategories[error.name]) errorCategories[error.name].push(i);
    else throw error; // unknown error types are not swallowed
  }
}

console.log("===== Transaction Report =====");
console.log(`Successful: ${valid.length}`);
console.log(`Failed    : ${invalid.length}`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Errors by category:", errorCategories);
