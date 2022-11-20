let game = document.querySelector('.field');
var oneRound = document.getElementById('one-round');
var resultComputer = document.getElementById('computers-count');
var resultPlayer = document.getElementById('players-count');
countPlayer = 0;
countComputer = 0;


game.addEventListener('click', getPLayerChoice);

//read player's choice by id of targeted button;
function getPLayerChoice(e) {
    let target = e.target;
    playerPlay = target.id;

    getComputerChoice();
}

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
    computerPlay = turnToWOrd.toLowerCase()

    tryround();
}

// get result from single round comparing computer's and player's choice playing single round

function tryround() {

    //if(countComputer < 5 && countPlayer < 5) {

    findAnswer(computerPlay, playerPlay);
    resultComputer.textContent = countComputer;
    resultPlayer.textContent = countPlayer;
    console.log(countPlayer, countComputer); 
    if (countComputer >= 5 && countComputer > countPlayer) {
       console.log("YOU LOOOSER");
    } else if(countPlayer >= 5 && countPlayer > countComputer){
            console.log("YOU ARE WINNER");
     }
//     resultComputer.textContent = countComputer;
//     resultPlayer.textContent = countPlayer;
//     console.log(countPlayer, countComputer); 
    }

function findAnswer(computerPlay, playerPlay) {

    if (playerPlay === computerPlay) {
        oneRound.textContent = "It is a tie.";
    } else if (playerPlay === "rock" && computerPlay === "paper") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}`;
        countComputer++;
    }   else if(playerPlay === "rock" && computerPlay === "scissors") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        countPlayer++;
    } else if (playerPlay === "paper" && computerPlay === "rock") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        countPlayer++;
    } else if (playerPlay === "paper" && computerPlay === "scissors") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}.`;
        countComputer++;
    } else if (playerPlay === "scissors" && computerPlay === "paper") {
        oneRound.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
        countPlayer++;
    } else if (playerPlay === "scissors" && computerPlay === "rock") {
        oneRound.textContent = `You lose! ${computerPlay} beats ${playerPlay}`;
        countComputer++;
    }
}

function findWinner() {

    if(countComputer > countPlayer) {
                console.log("YOU LOST!!! TRY AGAIN.");
     } else if(countPlayer < countComputer) {
                console.log("YOU WON!!! GREAT JOB!!!");
            } 
}
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
    //     }}
    //     if(computerCount > playerCount) {
    //         console.log("YOU LOST!!! TRY AGAIN.");
    //     } else if(computerCount < playerCount) {
    //         console.log("YOU WON!!! GREAT JOB!!!")
    //     }
