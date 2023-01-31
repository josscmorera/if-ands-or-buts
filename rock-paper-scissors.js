const prompt = require('prompt-sync')();

console.log('Player 1: Choose "rock", "paper", or "scissors": ');
const p1 = prompt('> ');

if ( p1 === "rock" || p1 === "scissors" || p1 === "paper") {
} else {
  console.log("Error 404 - Please try again");
  return;
}

console.log();

console.log('Player 2: Choose "rock", "paper", or "scissors": ');
const p2 = prompt('> ');

if ( p2 === "rock" || p2 === "scissors" || p2 === "paper") {
} else {
  console.log("Error 404 - Please try again");
  return;
}

console.log();

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