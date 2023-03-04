// Function that returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]; // Choices of rps

  //return selected choice randomly
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round of rps
function playRound(playerSelection, computerSelection) {
  let result = "";
  // When computer beats player
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper")
    result += "You Lose! Paper beats Rock";

  if (
    playerSelection.toLowerCase() === "scissprs" &&
    computerSelection === "rock"
  )
    result += "You Lose! Rock beats Scissors";

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  )
    result += "You Lose! Scissors beats Paper";

  // When player beats computer
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  )
    result += "You Win! Paper beats Rock";

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  )
    result += "You Win! Rock beats Scissors";

  if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
    result += "You Win! Paper beats Rock";

  // When players have the same choice, it's a tie
  if (
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "scissors")
  ) {
    result += "It's a tie";
  }

  return result;
}
