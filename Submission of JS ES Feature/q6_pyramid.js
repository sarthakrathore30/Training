"use strict";
// Q6: Pyramid Pattern Generator

// ---- Part 3: rows controlled by user input (node q6_pyramid.js 6), default 5 ----
const rawInput = typeof process !== "undefined" ? process.argv[2] : undefined;
const parsed = Number.parseInt(rawInput, 10);
const rows = Number.isInteger(parsed) && parsed > 0 ? parsed : 5;

function printPyramid(totalRows) {
  for (let row = 1; row <= totalRows; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}
console.log(`Pyramid with ${rows} rows:`);
printPyramid(rows);

// ---- Part 1: let vs var ----
// Output of the pyramid is identical with var, but the variables leak:
function printWithVar(totalRows) {
  for (var row = 1; row <= totalRows; row++) {
    var line = "";
    for (var col = 1; col <= row; col++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  // var is function-scoped, so the loop counters are still visible here
  console.log(`After loop (var): row=${row}, col=${col}`);
}
console.log("\nUsing var:");
printWithVar(4);

// The real difference shows up in closures:
const varCallbacks = [];
for (var v = 0; v < 3; v++) varCallbacks.push(() => v);
const letCallbacks = [];
for (let l = 0; l < 3; l++) letCallbacks.push(() => l);
console.log(`var closures: ${varCallbacks.map(f => f()).join(",")}`); // 3,3,3 (one shared variable)
console.log(`let closures: ${letCallbacks.map(f => f()).join(",")}`); // 0,1,2 (new binding each iteration)

// ---- Part 2: debugging notes ----
// Step through printPyramid in the debugger: with let, "row" and "col" appear in
// Block scope and are recreated; with var they sit in Local scope and are reused.

// ---- Part 4: strict mode catches undeclared loop variables ----
try {
  new Function('"use strict"; for (k = 0; k < 3; k++) {}')();
} catch (error) {
  console.log(`\nUndeclared loop variable in strict mode -> ${error.name}: ${error.message}`);
}
