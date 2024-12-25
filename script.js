var humanScore = 0;
var computerScore = 0;


function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber < 1/3){
        return 'rock';
    }else if (randomNumber < 2/3){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function getHumanChoice(){
    const humanChoice = prompt("Please enter your hand");
    const normalizedChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    }
}

function playRound(human, computer){
    if (human === computer){
        console.log("It's a tie!");
    } else if (human === 'rock' && computer === 'scissors' || human === 'paper' && computer === 'rock' || human === 'scissors' && computer === 'paper'){
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}


function playGame(){


    for (let i=0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);

    if (humanScore > computerScore){
        alert("Human wins!");
    } else if (humanScore < computerScore){
        alert("Computer wins!");
    } else{
        alert("It's a tie!");
    }
}

playGame();