// Q10: Citizen Eligibility Validator
const age = 19;
const isCitizen = true;

// Note: the brief lists "all services" for citizen & age >= 18 AND
// "vote only" for citizen & 18-20, which overlap. To make every outcome
// reachable, "all services" is applied from age 21 for citizens.
if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
