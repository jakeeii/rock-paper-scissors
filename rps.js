//Have computer randomly select either rock, paper, or scissors
//Get input from player to select rock, paper, or scissors
//If one person wins, increment their score by one and display who won
//If there is a tie, do not increment any score and declare a tie
//Repeat these steps until either player gets a score of 5
//Display game over and show the winner

const choices = ["rock", "paper", "scissors"]

let playerScore = 0
let computerScore = 0

function computerSelect() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function updateScore() {
  document.getElementById('player-score').textContent = "Player Score: " + playerScore
  document.getElementById('computer-score').textContent = "Computer Score: " + computerScore
}

function updateText(string) {
  document.getElementById('start').textContent = string
}

document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game
document.getElementById('scissors').onclick = game

function game() {
  updateScore();
  let playerSelection = this.id;
  let computerSelection = computerSelect();
  if (playerSelection === computerSelection) {
    updateText("Tie! You both picked " + computerSelection + ". Try again.");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") 
  ) {
    ++playerScore
    updateScore();
    updateText("You win! " + capitalize(playerSelection) + " beats " + computerSelection + ".")
    endGame();
  } else {
    ++computerScore
    updateScore();
    updateText("You lose! " + capitalize(computerSelection) + " beats " + playerSelection + ".")
    endGame();
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function endGame() {
  let winner = null
  if (playerScore === 5) {
    winner = 'Congratulations, you beat the computer! Select a button to play again.'
    updateText(winner)
    playerScore = 0
    computerScore = 0
  } else if (computerScore === 5) {
    winner = 'Sorry, you lost! Computer is the winner! Select a button to play again.'
    updateText(winner)
    playerScore = 0
    computerScore = 0
  } else {
    return
  }
}