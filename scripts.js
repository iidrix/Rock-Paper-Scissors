// Score counter

let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;

// Play one game

function game() {

    for (let i = 0; i < 5; i++) {

        playedRounds++;

        if ((5 - playedRounds + 1) < (playerScore - computerScore)) {
            break;
        } else if ((5 - playedRounds + 1) < (computerScore - playerScore)) {
            break;
        }
        
        // Generate computer choice

        let computerSelection = getComputerChoice();

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

        getComputerChoice();

        // Get player choice

        const playerInput = prompt("Choose your pick!", "Please type your answer here.").toLowerCase();
        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);

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

        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);  
        console.log(`Played rounds: ${playedRounds}`);
    }

}

game();

function scoreCounter() {

    if (playerScore > computerScore) {
        console.log("Congratulations, you've won!");
    } else if (computerScore > playerScore) {
        console.log("Ohh, you've lost!");
    } 

}

scoreCounter();
