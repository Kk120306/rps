const paperBtn = document.getElementById('paperBtn');
const rockBtn = document.getElementById('rockBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const result = document.getElementById('result');

paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

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



function playRound(human, computer){
    if (human === computer){
        console.log("It's a tie!");
        playGame("It's a tie!");
    } else if (human === 'rock' && computer === 'scissors' || human === 'paper' && computer === 'rock' || human === 'scissors' && computer === 'paper'){
        console.log("You win!");
        humanScore++;
        playGame("You win!");
    } else {
        console.log("You lose!");
        computerScore++;
        playGame("You lose!");
    }
}

function playGame(prompt = ""){
    if (humanScore === 5){
        result.innerText = "Human wins!";
    } else if (computerScore === 5){
        result.innerText = "Computer wins!";
    } else{
        result.innerText = `${prompt} - Current Score : Human ${humanScore} - Computer ${computerScore}`;
    }
}
