function playGame() {
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
    
    function getHumanChoice() {
        let choice;
        const options = ["rock", "paper", "scissors"];
        do {
            choice = window.prompt("rock, paper or scissors?", "").toLowerCase();
        } while (!options.includes(choice))
        return choice.toLowerCase();
    }
    
    function playRound(humanChoice, computerChoice) {
        console.log(`User: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);

        switch (`${humanChoice} ${computerChoice}`) {
            case "rock scissors":
            case "paper rock":
            case "scissors paper":
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                break;
            case "scissors rock":
            case "rock paper":
            case "paper scissors":
                computerScore++;
                console.log(`You lose! ${humanChoice} loses ${computerChoice}.`);
                break;
            default:
                console.log(`Draw! ${humanChoice} equals ${computerChoice}.`);
        }
    }
    
    for (let i = 0; i < 5; i++) {
        console.log(`${"-".repeat(20)} Round ${i + 1} ${"-".repeat(20)}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`${"-".repeat(20)} Score ${"-".repeat(20)}`);
    console.log(`User: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}