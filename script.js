var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var oneRound = document.getElementById('one-round');

rock.addEventListener('click', tryround);
paper.addEventListener('click', tryround);
scissors.addEventListener('click',tryround);

// //random number for computer 
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

function tryround(e) {
    computerPlay = getComputerChoice();
    playerPlay = e.target.id;
    let youWin = "You win!";
    let youLose = "You lose!";
    let itIsEven = "It is a tie!";
    if (playerPlay === computerPlay) {
        oneRound.textContent = "It is a tie."
        return itIsEven;
    } else if (playerPlay === "rock" && computerPlay === "paper") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}`;
        return youLose
    }   else if(playerPlay === "rock" && computerPlay === "scissors") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        return youWin
    } else if (playerPlay === "paper" && computerPlay === "rock") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        return youWin
    } else if (playerPlay === "paper" && computerPlay === "scissors") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}.`;
        return youLose
    } else if (playerPlay === "scissors" && computerPlay === "paper") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        return youWin
    } else if (playerPlay === "scissors" && computerPlay === "rock") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}`;
        return youLose
    } else {
        console.log("Your input should be Rock, Paper or Scissors ")
        return "Your input should be Rock, Paper or Scissors "
    }
}


    //play game for five rounds multiply calling for tryround, create counters for computer and player win and compare who won a game of five-rounds


    // function multipleCall() {
    //     let computerCount = 0;
    //     let playerCount = 0;
    //     for(let i = 0; i < 5; i++) {
    //       let singleRound = tryround();
    //       if(singleRound === "You win!") {
    //         playerCount++;
    //       }
    //       else if(singleRound === "You lose!") {
    //         computerCount++;
    //       }
    //       console.log(playerCount, computerCount);
    //     }
    //     if(computerCount > playerCount) {
    //         console.log("YOU LOST!!! TRY AGAIN.");
    //     } else if(computerCount < playerCount) {
    //         console.log("YOU WON!!! GREAT JOB!!!")
    //     }
    //     else {
    //         console.log("IT IS A TIE!! TRY AGAIN.");
    //     }
    // }

    // multipleCall();