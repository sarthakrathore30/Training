// Q10: Nested Hoisting and Closures

function outer() {
  console.log(count);   // undefined: outer's own "var count" is hoisted
  var count = 5;
  function inner() {
    console.log(count); // undefined: inner has ITS OWN hoisted "var count"
    var count = 10;
  }
  inner();
}
console.log("--- Original ---");
outer();
// Prediction: undefined, undefined
// Explanation: every function call creates its own execution context with its own
// memory. Both "var count" declarations are hoisted to the top of their own
// function, so inner never sees outer's count (5); it sees its own, still undefined.

// Arrow version of inner
function outerArrow() {
  console.log(count);   // undefined
  var count = 5;
  const inner = () => {
    console.log(count); // still undefined: the arrow also has its own function scope for var
    var count = 10;
  };
  inner();              // must come AFTER the const line (TDZ otherwise)
}
console.log("--- Arrow inner ---");
outerArrow();

// Behaviour changes with an arrow:
//  - var hoisting inside it is unchanged (arrows still get their own var scope).
//  - The arrow itself is not hoisted like a function declaration: calling it earlier throws ReferenceError.
try {
  (function () {
    early();
    const early = () => {};
  })();
} catch (error) {
  console.log(`Arrow called early: ${error.name}: ${error.message}`);
}
//  - Arrows have no own "this" or "arguments".

// Closure demonstration: remove inner's "var count" and it reads outer's count
function outerClosure() {
  var count = 5;
  function inner() {
    console.log(`Closure reads outer count: ${count}`);
  }
  inner();
}
console.log("--- Closure ---");
outerClosure();

// Debug session: breakpoint on outer()'s first line. Call stack when paused in
// inner: inner <- outer <- (anonymous/global). The Scope panel lists
// Local (inner's count) and Closure (outer's count) as separate variables.
