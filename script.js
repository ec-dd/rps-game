// Function that returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]; // Choices of rps

  //return selected choice randomly
  return choices[Math.floor(Math.random() * choices.length)];
}

let result = "";
let playerScore = 0;
let computerScore = 0;
let score = "";

// Function to play a round of rps
function playRound(playerSelection, computerSelection) {
  // When computer beats player
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    result = "You Lose! Paper beats Rock ";
    computerScore++;
  }

  if (
    playerSelection.toLowerCase() === "scissprs" &&
    computerSelection === "rock"
  ) {
    result = "You Lose! Rock beats Scissors ";
    computerScore++;
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  ) {
    result = "You Lose! Scissors beats Paper ";
    computerScore++;
  }

  // When player beats computer
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    result = "You Win! Paper beats Rock ";
    playerScore++;
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    result = "You Win! Rock beats Scissors ";
    playerScore++;
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    result = "You Win! Paper beats Rock ";
    playerScore++;
  }

  // When players have the same choice, it's a tie
  if (
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "scissors")
  ) {
    result = "It's a tie ";
  }

  //   display score and winner of round
  score = "Score is: Player " + playerScore + " vs Computer " + computerScore;
  return result + score;
}

// Function to generate a 5 round game of rps
function game() {
  //   Prompt user to prompt a choice for 5 rounds
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("rock, paper or scissors?");
    console.log(playRound(playerInput, getComputerChoice()));
  }

  //   Display the final score and winner
  if (playerScore === computerScore) {
    return "The game is tied! ";
  }

  return playerScore < computerScore
    ? "You Lost! " + score
    : "You Won! " + score;
}
