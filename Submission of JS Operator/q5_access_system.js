// Q5: Boolean Logic Access System

// Returns "Secure" only when every condition is satisfied
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Door "closed" is interpreted as locked
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    return "Secure";
  }
  return "Unsafe";
}

// Test several combinations: [door, window, alarm, owner]
const tests = [
  [true, true, true, true],    // everything OK
  [false, true, true, true],   // door unlocked
  [true, false, true, true],   // window open
  [true, true, false, true],   // alarm off
  [true, true, true, false],   // owner not inside
];

for (const [door, win, alarm, owner] of tests) {
  console.log(
    `Door locked: ${door}, Window closed: ${win}, Alarm: ${alarm}, Owner inside: ${owner} -> ${checkSecurity(door, win, alarm, owner)}`
  );
}
