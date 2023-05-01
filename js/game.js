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

function player() {
    let input = prompt("Write your choice of \"Rock\" \"Paper\" \"Scissors\"");

    while(true) {
        if(input == null)
            input = prompt("Bad input!\nWrite your choice of \"Rock\" \"Paper\" \"Scissors\"");
        else if(input.toLowerCase() === 'x')
            break;
        else if(input.toLowerCase() === "rock"
        || input.toLowerCase() === "paper"
        || input.toLowerCase() === "scissors")
            break;
        else
            input = prompt("Bad input!\nWrite your choice of \"Rock\" \"Paper\" \"Scissors\"");
    }

    return input;
}

function playRound(computerChoice, playerChoice) {
    const p = playerChoice.toLowerCase();
    const c = computerChoice.toLowerCase();

    console.log(`Computer chose: ${c}\nPlayer chose: ${p}`)

    if(p === c)
        return 0;

    if(p === "rock" && c === "paper")
        return 1;
    if(p === "rock" && c === "scissors")
        return 2;

    if(p === "paper" && c === "scissors")
        return 3;
    if(p === "paper" && c === "rock")
        return 4;

    if(p === "scissors" && c === "rock")
        return 5;
    if(p === "scissors" && c === "paper")
        return 6;
}

function game(roundCount = 5) {
    pScore = 0;
    cScore = 0
    
    let computerChoice;
    let playerChoice;
    let roundRez;

    for (let i = 1; i <= roundCount; ++i) {
        computerChoice = computerPlayer();
        playerChoice = player();
        if(playerChoice.toLowerCase() === 'x') {
            console.log("Game stoped before finishing!")
            return;
        }

        console.log(`Round ${i}/${roundCount} results:`)
        roundOutcome = playRound(computerChoice, playerChoice)
        switch(roundOutcome) {
            case 0:
                console.log("Draw!");
                break;
            case 1:
                console.log("You Lose! Paper beats Rock");
                cScore++;
                break;
            case 2:
                console.log("You Win! Rock beats Scissors");
                pScore++;
                break;
            case 3:
                console.log("You Lose! Scissors beats Paper");
                cScore++;
                break;
            case 4:
                console.log("You Win! Paper beats Rock");
                pScore++;
                break;
            case 5:
                console.log("You Lose! Rock beats Scissors");
                cScore++;
                break;
            case 6:
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
}
