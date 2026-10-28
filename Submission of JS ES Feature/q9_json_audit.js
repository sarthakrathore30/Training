"use strict";
// Q9: JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const requiredKeys = ["user", "age"];
const cleanData = [];
const errors = [];

rawData.forEach((text, index) => {
  const lineNumber = index + 1;
  // DEBUG: set a breakpoint on the next line and step with F10/F11.
  // On bad JSON control jumps from JSON.parse straight into the catch block.
  try {
    const entry = JSON.parse(text);
    const missing = requiredKeys.filter(key => !(key in entry));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }
    cleanData.push(entry);
  } catch (error) {
    const kind = error instanceof SyntaxError ? "Invalid JSON" : "Validation";
    errors.push({ line: lineNumber, kind, message: error.message });
    console.log(`Line ${lineNumber}: [${kind}] ${error.message}`);
  }
});

console.log("\nClean entries:", cleanData);

// Bonus: convert age to Number and drop users under 18
const adults = cleanData
  .map(entry => ({ ...entry, age: Number(entry.age) }))
  .filter(entry => !Number.isNaN(entry.age) && entry.age >= 18);

console.log("Adults after Number conversion (age >= 18):", adults);
console.log(`Errors logged: ${errors.length}`);
