// Generate computer choice

let computerSelection;

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
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
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors"; 
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"; 
    } else {
        return "Something went horribly wrong. Make sure you typed your choice right."
    }
    
}


console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
