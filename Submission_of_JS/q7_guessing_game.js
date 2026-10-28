// Q7: Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1; // 1-50
const userGuess = 25; // test value

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // Nested condition: not equal, so check closeness next
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
console.log(`(Secret was ${secretNumber}, you guessed ${userGuess})`);
