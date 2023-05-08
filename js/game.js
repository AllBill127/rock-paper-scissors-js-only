// Player_Computer choice constants
const DRAW = 0;
const ROCK_PAPER = 1;
const ROCK_SCISSORS = 2;
const PAPER_SCISSORS = 3;
const PAPER_ROCK = 4;
const SCISSORS_ROCK = 5;
const SCISSORS_PAPER = 6;

function computerPlayer() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if(choice === 1)
        return "Rock";
    if(choice === 2)
        return "Paper";
    if(choice === 3)
        return "Scissors";

    return 
}

function playerInput() {
    let input = prompt("Write your choice of \"Rock\" \"Paper\" \"Scissors\"");

    while(true) {
        if(input == null) {
            if(confirm("Are you sure you want to end the game?"))
                break;

            input = prompt("Write your choice of \"Rock\" \"Paper\" \"Scissors\"");
        }
        else if(input.trim().toLowerCase() === "rock"
        || input.trim().toLowerCase() === "paper"
        || input.trim().toLowerCase() === "scissors")
            break;
        else
            input = prompt(`Bad input!\nYou entered: ${input}\nWrite your choice of \"Rock\" \"Paper\" \"Scissors\"`);
    }

    return input;
}

function playRound(computerChoice, playerChoice) {
    const p = playerChoice.trim().toLowerCase();
    const c = computerChoice.trim().toLowerCase();

    if(p === c)
        return DRAW;

    if(p === "rock" && c === "paper")
        return ROCK_PAPER;
    if(p === "rock" && c === "scissors")
        return ROCK_SCISSORS;

    if(p === "paper" && c === "scissors")
        return PAPER_SCISSORS;
    if(p === "paper" && c === "rock")
        return PAPER_ROCK;

    if(p === "scissors" && c === "rock")
        return SCISSORS_ROCK;
    if(p === "scissors" && c === "paper")
        return SCISSORS_PAPER;
}

function game(roundCount = 5) {
    pScore = 0;
    cScore = 0
    
    let computerChoice;
    let playerChoice;
    let roundOutcome;

    for (let i = 1; i <= roundCount; ++i) {
        computerChoice = computerPlayer();
        playerChoice = playerInput();

        if(playerChoice == null) {
            console.log("Game stoped before finishing!")
            return;
        }

        console.log(`Round ${i}/${roundCount} results:`)
        console.log(`Computer chose: ${computerChoice}\nPlayer chose: ${playerChoice.trim()}`)

        roundOutcome = playRound(computerChoice, playerChoice)
        switch(roundOutcome) {
            case DRAW:
                console.log("Draw!");
                break;
            case ROCK_PAPER:
                console.log("You Lose! Paper beats Rock");
                cScore++;
                break;
            case ROCK_SCISSORS:
                console.log("You Win! Rock beats Scissors");
                pScore++;
                break;
            case PAPER_SCISSORS:
                console.log("You Lose! Scissors beats Paper");
                cScore++;
                break;
            case PAPER_ROCK:
                console.log("You Win! Paper beats Rock");
                pScore++;
                break;
            case SCISSORS_ROCK:
                console.log("You Lose! Rock beats Scissors");
                cScore++;
                break;
            case SCISSORS_PAPER:
                console.log("You Win! Scissors beats Paper");
                pScore++;
                break;
        }
    }

    if(pScore === cScore)
        console.log("Game ended in a Draw!");
    else if(pScore > cScore)
        console.log("You won!")
    else if(pScore < cScore)
        console.log("You lost!");

    if(confirm("Do you want to play again?"))
        location.reload();
}

function gameStart() {
    if(confirm("This is a Rock Paper Scissors game!\nDo you want to start?"))
        game();
    else
        if(confirm("Second chance!\nPlay the game?"))
            game();
}

window.addEventListener("load", gameStart());
