// Q4: Academic Performance Evaluator
const marks = [78, 85, 92, 66, 74]; // out of 100 each
const MAX_PER_SUBJECT = 100;

let totalMarks = 0;
let anyFailedSubject = false;

for (const mark of marks) {
  totalMarks += mark;
  if (mark < 35) anyFailedSubject = true; // validation rule
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * MAX_PER_SUBJECT)) * 100;

console.log(`Average   : ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (anyFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {
  console.log("Promoted"); // 50% up to just under 85%
}
