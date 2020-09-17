const PAPER = "paper";
const SCISSORS = "scissors";
const ROCK = "rock";

document.getElementById("rock").addEventListener("click", game);
document.getElementById("paper").addEventListener("click", game);
document.getElementById("scissors").addEventListener("click", game);

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    if (index == 0) {
        return PAPER;
    } else if (index == 1) {
        return SCISSORS;
    } else {
        return ROCK;
    }
}

//I assume that both player and computer selection are valid
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let won = false;
    if (player == computerSelection) {
        return ("You tied! You and the computer both chose " + player);
    } else if (player == ROCK) {
        if (computerSelection == PAPER) {
            won = false;
        } else {
            won = true;
        }
    } else if (player == PAPER) {
        if (computerSelection == SCISSORS) {
            won = false;
        } else {
            won = true;
        }
    } else {
        if (computerSelection == ROCK) {
            won = false;
        } else {
            won = true;
        }
    }
    if (won) {
        playerWins++;
        return `You won! Your choice of ${player} beats ${computerSelection}`;
    } else {
        computerWins++;
        return `You lost! Your choice of ${player} loses to ${computerSelection}`;
    }
}

function game(e) {
    let playerChoice = e.target.id;
    let result = playRound(playerChoice, computerPlay());
    document.querySelector('#result').textContent = result;
    document.querySelector('#computer-score').textContent = "Computer: " + computerWins;
    document.querySelector('#player-score').textContent = "You: " + playerWins;
    if (playerWins == 5) {
        reset();
        document.querySelector('#result').innerHTML = `<h3 style="color:green;">Congrats, you just won! The game has been reset, feel free to play again!</h3>`;
    } else if (computerWins == 5) {
        reset();
        document.querySelector('#result').innerHTML = `<h3 style="color:red;">Sorry, you just lost! The game has reset, feel free to play again!</h3>`;
    }
}

function reset() {
    playerWins = 0;
    computerWins = 0;
    document.querySelector('#result').textContent = result;
    document.querySelector('#computer-score').textContent = "Computer: " + computerWins;
    document.querySelector('#player-score').textContent = "You: " + playerWins;
}

