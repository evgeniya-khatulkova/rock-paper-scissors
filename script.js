let playerSelection = prompt("Choose your destiny! Fight!");

// return random number from 1 to 3, which are equivalent to "rock"
// "paper" or "scissors";
let randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(randomNumber) {
    if (randomNumber == 1) {
        return "Rock"
    } else if (randomNumber == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
let computerSelection = getComputerChoice();

function singleRound(playerSelection, computerSelection) {
    if(playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!"
    } else if (playerSelection === computerSelection) {
        return "It is a tie!"
    } else {
        return "You did it wrong"
    }}
console.log(singleRound(playerSelection, computerSelection));