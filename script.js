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
let computerHand = getComputerChoice(randomNumber);
console.log(computerHand);