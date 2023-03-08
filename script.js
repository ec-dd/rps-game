//Scorekeeping instances
let playerScore = 0;
let computerScore = 0;
let score = "";

//accessing html elements with DOM
let result = document.querySelector("#result"); //div to display result
const rockBtn = document.querySelector(".rock-btn"); // rock button
const paperBtn = document.querySelector(".paper-btn"); // paper button
const scissorsBtn = document.querySelector(".scissors-btn"); // scissors button

// Click event on buttons (calling playRound())
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// Function that returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]; // Choices of rps

  //return selected choice randomly
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round of rps
function playRound(playerSelection, computerSelection) {
  // When computer beats player
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    result.innerHTML = "You Lose! Paper beats Rock ";
    // computerScore++;
  }

  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    result.innerHTML = "You Lose! Rock beats Scissors ";
    // computerScore++;
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  ) {
    result.innerHTML = "You Lose! Scissors beats Paper ";
    // computerScore++;
  }

  // When player beats computer
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    result.innerHTML = "You Win! Paper beats Rock ";
    // playerScore++;
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    result.innerHTML = "You Win! Rock beats Scissors ";
    // playerScore++;
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    result.innerHTML = "You Win! Paper beats Rock ";
    // playerScore++;
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
    result.innerHTML = "It's a tie ";
  }

  //   display score and winner of round
  // score = "Score is: Player " + playerScore + " vs Computer " + computerScore;
  return result.innerHTML;
}

// Function to generate a 5 round game of rps
// function game() {
//   //   Prompt user to prompt a choice for 5 rounds
//   for (let i = 0; i < 5; i++) {
//     let playerInput = prompt("rock, paper or scissors?");
//     console.log(playRound(playerInput, getComputerChoice()));
//   }

//   //   Display the final score and winner
//   if (playerScore === computerScore) {
//     return "The game is tied! ";
//   }

//   return playerScore < computerScore
//     ? "You Lost! " + score
//     : "You Won! " + score;
// }
