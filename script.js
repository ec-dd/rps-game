//Scorekeeping instances
let playerScore = 0;
let computerScore = 0;

//accessing html elements with DOM
let result = document.querySelector("#result"); //div to display result of round
let score = document.querySelector("#score"); //div to display score
let finalScore = document.querySelector("#final");
// let scoreContent = "Player: " + playerScore + " - Computer: " + computerScore;
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

// functions to increment scores
function increasePlayerScore() {
  return playerScore++;
}

function increaseComputerScore() {
  return computerScore++;
}

// Function to play a round of rps
function playRound(playerSelection, computerSelection) {
  // let playerScore = 0;
  // let computerScore = 0;

  // When computer beats player
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    increaseComputerScore();
    result.innerHTML = "You Lose! Paper beats Rock ";
  }

  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    increaseComputerScore();
    result.innerHTML = "You Lose! Rock beats Scissors ";
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  ) {
    increaseComputerScore();
    result.innerHTML = "You Lose! Scissors beats Paper ";
  }

  // When player beats computer
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    increasePlayerScore();
    result.innerHTML = "You Win! Paper beats Rock ";
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    increasePlayerScore();
    result.innerHTML = "You Win! Rock beats Scissors ";
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    increasePlayerScore();
    result.innerHTML = "You Win! Paper beats Rock ";
  }

  // When players have the same choice, it's a tie
  if (playerSelection.toLowerCase() === computerSelection) {
    result.innerHTML = "It's a tie ";
  }

  //   display score and winner of round
  score.innerHTML =
    "Score is: Player " + playerScore + " vs Computer " + computerScore;

  if (playerScore === 5) {
    finalScore.innerHTML = "Congrats! You Won";
  } else if (computerScore === 5) {
    finalScore.innerHTML === "Sorry, you lost.";
  }
  // return result.innerHTML + score.innerHTML;
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
