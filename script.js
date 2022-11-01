//random number for player 
function getPlayerChoice () {
    let playerSelection = prompt("Choose your destiny! Fight!")
    return playerSelection
}
//random number for computer 
// return random number from 1 to 3, which are equivalent to "rock"
// "paper" or "scissors";

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1
    let turnToWOrd = " ";
    if (random === 1) {
        turnToWOrd = "Rock";
    } else if (random === 2) {
        turnToWOrd = "Paper";
    } else if (random === 3) {
        turnToWOrd = "Scissors";
    }
    return turnToWOrd
}

// get result from single round comparing computer's and player's choice playing single round

function tryround() {
    computerPlay = getComputerChoice();
    playerPlay = getPlayerChoice();
    let youWin = "You win!";
    let youLose = "You lose!";
    let itIsEven = "It is a tie!";
    if (playerPlay === computerPlay) {
        return itIsEven;
    } else if (playerPlay === "Rock" && computerPlay === "Paper") {
        return youLose
    }   else if(playerPlay === "Rock" && computerPlay === "Scissors") {
        return youWin
    } else if (playerPlay === "Paper" && computerPlay === "Rock") {
        return youWin
    } else if (playerPlay === "Paper" && computerPlay === "Scissors") {
        return youLose
    } else if (playerPlay === "Scissors" && computerPlay === "Paper") {
        return youWin
    } else if (playerPlay === "Scissors" && computerPlay === "Rock") {
        return youLose
    } else {
        return "Your input should be Rock, Paper or Scissors "
    }
}

    /*function singleRound(getPlayerChoice, getComputerChoice) {
    if(getPlayerChoice === "Rock" && getComputerChoice === "Paper") {
        return `You lose! ${getComputerChoice} beats ${getComputerChoice}!`
    } else if (getPlayerChoice === "Rock" && getComputerChoice === "Scissors") {
        return `You win! ${getPlayerChoice} beats ${getComputerChoice}!`
    } else if (getPlayerChoice === "Paper" && getComputerChoice === "Rock") {
        return `You win! ${getPlayerChoice} beats ${getComputerChoice}!`
    } else if (getPlayerChoice === "Paper" && getComputerChoice === "Scissors") {
        return `You lose! ${getComputerChoice} beats ${getPlayerChoice}!`
    } else if (getPlayerChoice === "Scissors" && getComputerChoice === "Rock") {
        return `You lose! ${getComputerChoice} beats ${getPlayerChoice}!`
    } else if (getPlayerChoice === "Scissors" && getComputerChoice === "Paper") {
        return `You win! ${getPlayerChoice} beats ${getComputerChoice}!`
    } else if (getPlayerChoice === getComputerChoice) {
        return "It is a tie!"
    } else {
        return "You have to choose from Rock, Paper or Scissors!!"
    }}*/

    /*function multipleCall() {
        for(let i = 0; i < 5; i++) {
          let singleRound = tryround();
          console.log(singleRound);
        }
    }*/

    //play game for five rounds multiply calling for tryround, create counters for computer and player win


    function multipleCall() {
        let computerCount = 0;
        let playerCount = 0;
        for(let i = 0; i < 5; i++) {
          let singleRound = tryround();
          if(singleRound === "You win!") {
            playerCount++;
          }
          else if(singleRound === "You lose!") {
            computerCount++;
          }
          console.log(singleRound, computerCount, playerCount);
        }
    }
