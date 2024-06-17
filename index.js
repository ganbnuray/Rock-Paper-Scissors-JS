// DOM elements to use
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

// initializing variables for score tracking
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  // generating a random number between 0 and 2 to access a random elemennt from the array of choices for computer
  let index = Math.floor(Math.random() * 3);
  const computerChoice = choices[index];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    resultDisplay.style.color = "black";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You win!" : "You lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!" : "You lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!" : "You lose!";
        break;
    }
    // resetting the color for the next game
    resultDisplay.style.color = "black";

    // setting the colors for win and lose cases and tracking the scores
    if (result === "You win!") {
      playerScore++;
      resultDisplay.style.color = "green";
    } else if (result === "You lose!") {
      computerScore++;
      resultDisplay.style.color = "tomato";
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
  // setting all the scores and displays to default
  playerScore = 0;
  computerScore = 0;
  result = "";
  playerDisplay.textContent = `Player: `;
  computerDisplay.textContent = `Computer: `;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
