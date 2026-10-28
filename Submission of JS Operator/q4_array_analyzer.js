// Q4: Array Performance Analyzer

// Build an array of 8 random scores between 30 and 100
const scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30); // 30-100
}

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
const passed = scores.filter(s => s >= 50);
const grades = scores.map(s => (s >= 50 ? "Pass" : "Fail"));

console.log("===== Performance Summary =====");
console.log(`Scores        : ${scores.join(", ")}`);
console.log(`Results       : ${grades.join(", ")}`);
console.log(`Highest       : ${highest}`);
console.log(`Lowest        : ${lowest}`);
console.log(`Average       : ${average.toFixed(2)}`);
console.log(`Students passed: ${passed.length} of ${scores.length}`);
