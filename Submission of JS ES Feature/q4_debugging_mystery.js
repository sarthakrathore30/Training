"use strict";
// Q4: Debugging Mystery

// 1. Why the original code fails:
//    function showMessage() { greeting = "Welcome"; console.log(greeting); }
//    "greeting" is never declared. In sloppy mode JS silently creates a global
//    variable; in strict mode assigning to an undeclared name is a ReferenceError.
function brokenShowMessage() {
  greeting = "Welcome"; // undeclared -> ReferenceError under "use strict"
  console.log(greeting);
}

try {
  brokenShowMessage();
} catch (error) {
  console.log(`Caught ${error.name}: ${error.message}`);
}

// 2. Fix: declare the variable. "const"/"let" give it block/function scope,
//    so it no longer leaks onto the global object.
function showMessage() {
  const greeting = "Welcome"; // WATCH: add "greeting" to VS Code's Watch panel
  debugger;                   // CALL STACK: shows showMessage <- anonymous (module)
  console.log(greeting);
}
showMessage();

// Scope rule change: declarations decide where a name lives; assignment
// never creates a variable in strict mode.
console.log(`typeof greeting outside function: ${typeof greeting}`); // "undefined"

// 3. VS Code: open this file, click left of a line number to set a breakpoint
//    on the console.log in showMessage, press F5, add greeting to Watch, and
//    read the Call Stack panel (showMessage called from the top-level module).
