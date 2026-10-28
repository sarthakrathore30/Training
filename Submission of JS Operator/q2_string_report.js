// Q2: String Manipulation Report
const rawTitle = "  wireless headphones PRO  ";

// Step 1: trim spaces and lowercase
const cleaned = rawTitle.trim().toLowerCase();

// Step 2: capitalize first letter of each word
const capitalized = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: replace the whole word "Pro" with "Pro Edition"
const finalTitle = capitalized.replace(/\bPro\b/, "Pro Edition");

console.log(`Original  : "${rawTitle}"`);
console.log(`Cleaned   : "${finalTitle}"`);
console.log(`Length    : ${finalTitle.length}`);
