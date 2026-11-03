// 1. Store the scores outside the functions
let humanScore = 0;
let computerScore = 0;


// 2. Generate the computer's choice
function getComputerChoice() {
    let computerChoiceIndex = Math.floor(Math.random() * 3);

    if (computerChoiceIndex === 0) {
        return "rock";
    } else if (computerChoiceIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


// 3. Select the elements we need
const result = document.querySelector("#result");

const humanDisplay = document.querySelector("#humanScore span");
const computerDisplay = document.querySelector("#computerScore span");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


// 4. Play one round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
        return "tie";

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent =
            `You win! ${humanChoice} beats ${computerChoice}.`;

        return "human";

    } else {
        result.textContent =
            `You lose! ${computerChoice} beats ${humanChoice}.`;

        return "computer";
    }
}


// 5. Handle a player's turn
function playGame(humanChoice) {
    let gameOver = false;
    const computerChoice = getComputerChoice();

    // Play the round ONCE and save its result
    const winner = playRound(humanChoice, computerChoice);

    // Update the appropriate score
    if (winner === "human") {
        humanScore++;

    } else if (winner === "computer") {
        computerScore++;
    }

    // Update the scores displayed on the webpage
    humanDisplay.textContent = humanScore;
    computerDisplay.textContent = computerScore;

    // Check if either player has reached 5 points to declare a winner
    function checkForWinner() {
        if (humanScore === 5) {
            result.textContent = "Congratulations! You won the game!";
            gameOver = true;
            return "humanWon";
        } else if(computerScore ===  5){
            result.textContent = "Sorry! The computer won the game!, try again!";
            gameOver = true;
            return "computerWon";
        }
    };

    checkForWinner();

    // reset the scores if someone has won
    function resetGame(){
        if (gameOver === true) {
            humanScore = 0;
            computerScore = 0;
            humanDisplay.textContent = humanScore;
            computerDisplay.textContent = computerScore;
            result.textContent = "Game reset! Start a new game.";
            gameOver = false;
        }
    }

    setTimeout(resetGame, 1000); // Reset the game after 3 seconds
    }



// 6. Check if either player has reached 5 points to declare a winner


// 6. Connect the buttons to the game
rock.addEventListener("click", function() {
    playGame("rock");
});

paper.addEventListener("click", function() {
    playGame("paper");
});

scissors.addEventListener("click", function() {
    playGame("scissors");
});

