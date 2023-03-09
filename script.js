//Scorekeeping instances
let playerScore = 0;
let computerScore = 0;

//accessing html elements with DOM
let result = document.querySelector("#result"); //div to display result of round
let score = document.querySelector("#score"); //div to display score
let finalScore = document.querySelector("#final"); //final result

// buttons
const rockBtn = document.querySelector(".rock-btn"); // rock button
const paperBtn = document.querySelector(".paper-btn"); // paper button
const scissorsBtn = document.querySelector(".scissors-btn"); // scissors button
const buttons = [rockBtn, paperBtn, scissorsBtn]; //Array of game buttons
const restartBtn = document.querySelector(".restart"); // restart button

// Score counter
const playerScoreCounter = document.getElementById("playerScoreCounter");
const computerScoreCounter = document.getElementById("computerScoreCounter");

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

// restart game button
restartBtn.addEventListener("click", () => {
  window.location.reload();
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

//functions for score displays
function displayPlayerScore() {
  return (playerScoreCounter.innerHTML = playerScore);
}

function displayComputerScore() {
  return (computerScoreCounter.innerHTML = computerScore);
}

function displayScores() {
  displayComputerScore();
  displayPlayerScore();
}

// function to disable buttons (to be used when score is reached)
function disableButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// Function to play a round of rps
function playRound(playerSelection, computerSelection) {
  // When computer beats player
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    increaseComputerScore();
    displayScores();
    result.innerHTML = "You Lose! Paper beats Rock ";
  }

  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    increaseComputerScore();
    displayScores();
    result.innerHTML = "You Lose! Rock beats Scissors ";
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  ) {
    increaseComputerScore();
    displayScores();
    result.innerHTML = "You Lose! Scissors beats Paper ";
  }

  // When player beats computer
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    increasePlayerScore();
    displayScores();
    result.innerHTML = "You Win! Paper beats Rock ";
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    increasePlayerScore();
    displayScores();
    result.innerHTML = "You Win! Rock beats Scissors ";
  }

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    increasePlayerScore();
    displayScores();
    result.innerHTML = "You Win! Paper beats Rock ";
  }

  // When players have the same choice, it's a tie
  if (playerSelection.toLowerCase() === computerSelection) {
    result.innerHTML = "It's a tie ";
  }

  //   display score and winner of round
  // score.innerHTML =
  //   "Score is: Player " + playerScore + " vs Computer " + computerScore;

  if (playerScoreCounter === 5) {
    finalScore.innerHTML = "Congrats! You Won";
    disableButtons();
    restartBtn.removeAttribute("hidden");
  } else if (computerScoreCounter === 5) {
    finalScore.innerHTML === "Sorry, you lost.";
    disableButtons();
    restartBtn.removeAttribute("hidden");
  }
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
