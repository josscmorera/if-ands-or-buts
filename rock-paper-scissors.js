const prompt = require('prompt-sync')();

console.log('Player 1: Choose "rock", "paper", or "scissors": ');
const p1 = prompt();

if (!["rock", "paper", "scissors"].includes(p1)) {
  console.log("Error 404 - Please try again");
  return;
}

console.log('Player 2: Choose "rock", "paper", or "scissors": ');
const p2 = prompt();

if (!["rock", "paper", "scissors"].includes(p2)) {
  console.log("Error 404 - Please try again");
  return;
}

if (p1 === p2) {
  console.log("DRAW!!!");
} else if (p1 === "rock" && p2 === "scissors") {
  console.log("Player 1 wins!");

} else if (p1 === "scissors" && p2 === "paper") {
  console.log("Player 1 wins!");

} else if (p1 === "paper" && p2 === "rock") {
    console.log("Player 1 wins!");

} else if (p1 === "scissors" && p2 === "rock") {
    console.log("Player 2 wins!");

} else if (p1 === "paper" && p2 === "scissors") {
    console.log("Player 2 wins!");
} else if (p1 === "rock" && p2 === "paper") {
    console.log("Player 2 wins!");
} else {
    console.log("Invalid input");
}