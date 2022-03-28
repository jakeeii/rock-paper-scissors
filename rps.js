//Have computer randomly select either rock, paper, or scissors
//Get input from player to select rock, paper, or scissors
//If one person wins, increment their score by one and display who won
//If there is a tie, do not increment any score and declare a tie
//Repeat these steps until either player gets a score of 5
//Display game over and show the winner

const choices = ["rock", "paper", "scissors"]

let playerSelection = playerSelect();
let computerSelection = computerSelect();

function computerSelect() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function playerSelect() {
  let input = window.prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  while (input == null) {
    input = window.prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  }
  input = input.toLowerCase();
  return input
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") 
  ) {
    return ("You win! " + capitalize(playerSelection) + " beats " + computerSelection + ".");
  } else {
    return ("You lose! " + capitalize(computerSelection) + " beats " + playerSelection + ".");
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(playRound(playerSelection, computerSelection));