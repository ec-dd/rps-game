// Function that returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"]; // Choices of rps

  //return selected choice randomly
  return choices[Math.floor(Math.random() * choices.length)];
}
