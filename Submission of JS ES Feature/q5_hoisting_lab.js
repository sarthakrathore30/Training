"use strict";
// Q5: Hoisting Lab - The Sequence Trap

// ---- PART 1: Predict, then run the original ----
// Prediction: undefined, "Game started", "ready"
console.log("--- Original ---");
console.log(score);          // var is hoisted and initialized to undefined -> prints undefined
announce();                  // function declaration is hoisted with its body -> works
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";        // let is hoisted but stays in the TDZ until this line runs
startGame();                 // runs AFTER status is initialized, so it works
function startGame() {
  console.log(status);
}

// ---- PART 2: Memory state of each hoisted element ----
// score      : var            -> hoisted, value undefined until "= 50" executes
// announce   : function decl. -> hoisted fully (name + body) before any code runs
// status     : let            -> hoisted but uninitialized (Temporal Dead Zone)
// startGame  : function decl. -> hoisted fully

// Proof of the TDZ for let:
try {
  console.log(lateLet);
} catch (error) {
  console.log(`TDZ: ${error.name}: ${error.message}`);
}
let lateLet = "now initialized";

// ---- PART 3: Fixed version (declare before use, use let/const) ----
console.log("--- Fixed ---");
let fixedScore = 50;
const fixedStatus = "ready";
function fixedAnnounce() { console.log("Game started"); }
function fixedStartGame() { console.log(fixedStatus); }
console.log(fixedScore);
fixedAnnounce();
fixedStartGame();

// ---- PART 4: Arrow function comparison ----
// Arrow functions assigned to const/let are NOT usable before their line.
console.log("--- Arrow functions ---");
try {
  arrowAnnounce(); // const is in the TDZ -> ReferenceError
} catch (error) {
  console.log(`Arrow before definition: ${error.name}: ${error.message}`);
}
const arrowAnnounce = () => console.log("Game started");
const arrowStartGame = () => console.log(fixedStatus);
arrowAnnounce();   // works after the definition
arrowStartGame();
// Difference: function declarations hoist with their body; arrow functions
// (function expressions) follow the hoisting rules of the variable that holds them.
