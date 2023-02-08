// Generate computer choice

let computerSelection;

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

}

getComputerChoice();
console.log(computerSelection);