let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
    
const compareGuesses = (humanGuess, computerGuess, targetNumber) => !(Math.abs(computerGuess - targetNumber) < Math.abs(humanGuess - targetNumber))

const updateScore = winner => {
    if (winner === `human`) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => currentRoundNumber += 1;




