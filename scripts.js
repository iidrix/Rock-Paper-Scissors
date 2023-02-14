// Score counter

let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;

// Generate computer choice

const computerSelection = getComputerChoice();

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

 // Get player choice

let playerSelection;

function getPlayerChoice() {

    const playerInput = prompt("Choose your pick!", "Please type your answer here.").toLowerCase();
    playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);

}

// Play one round

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        return "It's a tie!";

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

        computerScore++;
        return "You Lose! Paper beats Rock";

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {

        playerScore++;
        return "You Win! Paper beats Rock";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {

        computerScore++;
        return "You Lose! Rock beats Scissors";

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {

        playerScore++;
        return "You Win! Rock beats Scissors";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {

        computerScore++;
        return "You Lose! Scissors beats Paper";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {

        playerScore++;
        return "You Win! Scissors beats Paper";

    } else {

        return "Something went horribly wrong. Make sure you typed your choice right."

    }

}

function game() {

    for (let i = 0; i < 5; i++) {

        playedRounds++;

        if (((5 - playedRounds + 1) < (playerScore - computerScore)) || ((5 - playedRounds + 1) < (computerScore - playerScore))) {
            break;
        }

        getPlayerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);  
        console.log(`Played rounds: ${playedRounds}`);
    }
}

game();

// Tie breaker

function tieBreaker() {
    while (playerScore === computerScore) {

        playedRounds++;

        getPlayerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);  
        console.log(`Played rounds: ${playedRounds}`);

    }
}

tieBreaker();

// Declare winner

function declareWinner() {

    if (playerScore > computerScore) {
        console.log("Congratulations, you've won!");
    } else if (computerScore > playerScore) {
        console.log("Ohh, you've lost!");
    } 

}

declareWinner();