// DOM Cache
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
let winMessageRock = "Your rock smashed my scissors. You won!";
let winMessagePaper = "Your paper covered my rock and somehow that means I lost!";
let winMessageScissors = "Your scissors shredded my paper. Congrats!";
let loseMessageRock = "My incredibly weak paper covered your sturdy rock so that means you lost!";
let loseMessagePaper = "My scissors messed your paper up. Better luck next time!";
let loseMessageScissors = "My rock banged up your scissors. Maybe you'll win the next one.";
let drawMessageDisplay = "Looks like it's a draw! Try again.";


// Btn functionality
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function winMessage(player, computer) {
    if (player === "rock" && computer === "scissors") {
        return winMessageRock;
    } else if (player === "paper" && computer === "rock") {
        return winMessagePaper;
    } else if (player === "scissors" && computer === "paper") {
        return winMessageScissors;
    }
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = winMessage(playerChoice, computerChoice);
}

function loseMessage(player, computer) {
    if (player === "rock" && computer === "paper") {
        return loseMessageRock;
    } else if (player === "paper" && computer === "scissors") {
        return loseMessagePaper;
    } else if ( player === "scissors" && computer === "rock") {
        return loseMessageScissors;
    }
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    results_p.innerHTML = loseMessage(playerChoice, computerChoice);
}

function drawMessage(player, computer) {
    if (player && computer === "rock" || player && computer === "paper" || player && computer === "scissors")
    return drawMessageDisplay;
}

function draw(playerChoice, computerChoice) {
    results_p.innerHTML = drawMessage(playerChoice, computerChoice);
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        win(playerChoice, computerChoice);
    } else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
        lose(playerChoice, computerChoice);
    } else  {
        draw(playerChoice, computerChoice);
    }
}

function shoot() {
    rock_btn.addEventListener('click', function() {
        game("rock");
    });

    paper_btn.addEventListener('click', function() {
        game("paper");
    });

    scissors_btn.addEventListener('click', function() {
        game("scissors");
    });
}

shoot();

// Made by Curtis Henley
