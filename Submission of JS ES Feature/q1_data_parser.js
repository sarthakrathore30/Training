"use strict";
// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

// Debug observation: Number(" ") is 0 and Number(null) is 0, which would look
// "valid". So blank strings and null/undefined are rejected explicitly.
function isValidNumeric(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return !Number.isNaN(Number(value));
}

apiData.forEach((value, index) => {
  // Three conversions of the same raw value
  const asNumber = Number(value);
  const asBoolean = Boolean(value); // note: Boolean("false") is true (non-empty string)
  const asString = String(value);

  const record = { index, raw: value, asNumber, asBoolean, asString };

  if (isValidNumeric(value)) {
    validNumbers.push(record);
    console.log(`[VALID  ] #${index} raw=${JSON.stringify(value)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}"`);
  } else {
    invalidEntries.push(record);
    console.log(`[INVALID] #${index} raw=${JSON.stringify(value)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}" (skipped)`);
  }
});

console.log("\n===== Report =====");
console.log(`Valid numeric values  (${validNumbers.length}): ${validNumbers.map(r => r.asNumber).join(", ")}`);
console.log(`Invalid entries       (${invalidEntries.length}): ${invalidEntries.map(r => String(JSON.stringify(r.raw))).join(", ")}`);
