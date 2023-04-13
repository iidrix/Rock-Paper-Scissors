const computerChoice = document.querySelector('#computer-choice')
const output = document.querySelector('#output');
const userScoreOutput = document.querySelector('#user-score');
const computerScoreOutput = document.querySelector('#computer-score');
const userCounter = document.querySelector('#user-counter');
const computerCounter = document.querySelector('#computer-counter');
const choiceButtons = document.querySelectorAll('#choice-button');
const resetButton = document.getElementById('reset-game');

resetButton.addEventListener('click', () => {
    location.reload();
});

// Global variables

let playerScore = 0;
let computerScore = 0;
let playerSelection;

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

// Play one round

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "It's a tie!";

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

        computerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Lose! Paper beats Rock";

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {

        playerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Win! Paper beats Rock";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {

        computerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Lose! Rock beats Scissors";

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {

        playerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Win! Rock beats Scissors";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {

        computerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Lose! Scissors beats Paper";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {

        playerScore++;
        computerChoice.textContent = `The computer chose ${computerSelection}!`;
        output.textContent = "You Win! Scissors beats Paper";

    } else {

        output.textContent = "Something went horribly wrong. Make sure you typed your choice right."

    }

}

// Declare winner

function declareWinner() {

    if (playerScore === 5) {
        output.textContent =  "Congratulations, you've won!";

        computerChoice.style.display = "none";
        choiceButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = "0.2";
        });
        resetButton.textContent = "PLAY AGAIN";

    } else if (computerScore === 5) {
        output.textContent =  "Ohh, you've lost!";

        computerChoice.style.display = "none";
        choiceButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = "0.2";
        });
        resetButton.textContent = "PLAY AGAIN";
    } 

}

function playGame() {

    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playerSelection = btn.value;
            console.log(playerSelection);
            getComputerChoice();
            console.log(computerSelection);
            playRound(playerSelection, computerSelection);
            userCounter.textContent = playerScore;
            computerCounter.textContent = computerScore;
            declareWinner();
        });
     });

}

playGame();