//random number for player 
function getPlayerChoice () {
    let playerSelection = prompt("Choose your destiny! Fight!")
    return playerSelection.toLowerCase()
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
    return turnToWOrd.toLowerCase()
}

// get result from single round comparing computer's and player's choice playing single round

function tryround() {
    computerPlay = getComputerChoice();
    playerPlay = getPlayerChoice();
    let youWin = "You win!";
    let youLose = "You lose!";
    let itIsEven = "It is a tie!";
    if (playerPlay === computerPlay) {
        console.log("It is a tie.")
        return itIsEven;
    } else if (playerPlay === "rock" && computerPlay === "paper") {
        console.log(`You lose! ${computerPlay} beats ${playerPlay}`)
        return youLose
    }   else if(playerPlay === "rock" && computerPlay === "scissors") {
        console.log(`You win! ${playerPlay} beats ${computerPlay}`)
        return youWin
    } else if (playerPlay === "paper" && computerPlay === "rock") {
        console.log(`You win! ${playerPlay} beats ${computerPlay}`)
        return youWin
    } else if (playerPlay === "paper" && computerPlay === "scissors") {
        console.log(`You lose! ${computerPlay} beats ${playerPlay}.`)
        return youLose
    } else if (playerPlay === "scissors" && computerPlay === "paper") {
        console.log(`You win! ${playerPlay} beats ${computerPlay}`)
        return youWin
    } else if (playerPlay === "scissors" && computerPlay === "rock") {
        console.log(`You lose! ${computerPlay} beats ${playerPlay}`)
        return youLose
    } else {
        console.log("Your input should be Rock, Paper or Scissors ")
        return "Your input should be Rock, Paper or Scissors "
    }
}


    //play game for five rounds multiply calling for tryround, create counters for computer and player win and compare who won a game of five-rounds


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
          console.log(playerCount, computerCount);
        }
        if(computerCount > playerCount) {
            console.log("YOU LOST!!! TRY AGAIN.");
        } else if(computerCount < playerCount) {
            console.log("YOU WON!!! GREAT JOB!!!")
        }
        else {
            console.log("IT IS A TIE!! TRY AGAIN.");
        }
    }

    multipleCall();