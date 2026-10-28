// Q8: Strict Mode Showdown
// The two modes cannot sit in one function: strict-mode rule violations like
// duplicate parameters are SyntaxErrors, raised before any code runs. So each
// snippet is compiled separately with new Function() and wrapped in try/catch.

const snippets = {
  "Original code, sloppy mode": `
    function demo(a, a) { total = 10; delete total; return "a=" + a + ", total=" + typeof total; }
    return demo(5, 10);`,
  "Original code, strict mode": `"use strict";
    function demo(a, a) { total = 10; delete total; }
    return demo(5, 10);`,
  "Strict: only the undeclared assignment": `"use strict";
    function demo(a, b) { total = 10; }
    return demo(5, 10);`,
  "Strict: only delete of a variable name": `"use strict";
    function demo(a, b) { let total = 10; delete total; }
    return demo(5, 10);`,
};

for (const [label, body] of Object.entries(snippets)) {
  try {
    const result = new Function(body)();
    console.log(`${label}: OK -> ${result}`);
  } catch (error) {
    console.log(`${label}: ${error.name}: ${error.message}`);
  }
}

// Why strict mode forbids these:
// 1. Duplicate parameter names (a, a): the second silently shadows the first, almost
//    always a typo, so a is 10 and the 5 is lost.
// 2. total = 10 without a declaration: creates an accidental global that any
//    other code can read or overwrite, and hides spelling mistakes.
// 3. delete total: delete is meant for object properties, not variables.
//    Sloppy mode ignores or mishandles it; strict mode makes it a SyntaxError.

// Correct ES6 version (also valid under strict mode: unique params, declared variables)
function demo(first, second) {
  let total = 10;                          // declared, so it stays local
  const settings = { total };
  delete settings.total;                   // delete is legal on object properties
  return first + second + total;
}
console.log(`Corrected demo(5, 10) = ${demo(5, 10)}`);
