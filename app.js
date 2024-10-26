let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const result = document.querySelector("#result");
const round = document.querySelector("#round");
const user = document.querySelector("#humanScore");
const computer = document.querySelector("#computerScore");

function newGame() {
    humanScore = 0;
    computerScore = 0;

    result.textContent = "Rock, paper, scissors? You choose!";
    round.textContent = "First to 5 points wins!";
    user.innerHTML = `<b>User: </b>${humanScore}`;
    computer.innerHTML = `<b>Computer: </b>${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    switch (`${humanChoice} ${computerChoice}`) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            humanScore++;
            result.textContent = "You win!";
            round.textContent = `${humanChoice} beats ${computerChoice}.`
            break;
        case "scissors rock":
        case "rock paper":
        case "paper scissors":
            computerScore++;
            result.textContent = "You lose!";
            round.textContent = `${humanChoice} loses to${computerChoice}.`;
            break;
        default:
            result.textContent = "Draw!";
            round.textContent = `${humanChoice} equals ${computerChoice}.`
    }
    user.innerHTML = `<b>User: </b>${humanScore}`;
    computer.innerHTML = `<b>Computer: </b>${computerScore}`;
}

const options = document.querySelector("#options");
options.addEventListener("click", (e) => {
    playRound(e.target.alt, getComputerChoice());
    
    if (humanScore == 5 || computerScore == 5) {
        window.alert(`${humanScore == 5 ? "You" : "Computer"} wins! Play again?`);
        newGame();
    };
})

newGame();