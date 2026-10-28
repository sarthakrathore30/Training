// Q2: Multi-Type Data Summary
const userName = "Aarav";
const age = 21;
const isActive = true;
const hobbies = ["reading", "coding"];
const address = { city: "Mathura", state: "UP" };
const middleName = null;
let phone; // undefined

// Returns a readable type; typeof alone reports arrays/null as "object"
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Each row: label + value + type, printed with ONE console.table()
console.table([
  { label: "userName",   value: userName,   type: getType(userName) },
  { label: "age",        value: age,        type: getType(age) },
  { label: "isActive",   value: isActive,   type: getType(isActive) },
  { label: "hobbies",    value: JSON.stringify(hobbies), type: getType(hobbies) },
  { label: "address",    value: JSON.stringify(address), type: getType(address) },
  { label: "middleName", value: middleName, type: getType(middleName) },
  { label: "phone",      value: phone,      type: getType(phone) },
]);
