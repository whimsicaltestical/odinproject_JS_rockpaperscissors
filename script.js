function computerPlay() {  // generates the CPU player's answer randomly
  let random = ["ROCK", "PAPER", "SCISSORS"];
  let computerHand = random[Math.floor(Math.random() * random.length)];
  return computerHand;      
}

// This functions plays 1 round of rock, paper, scissors
function playRound(playerSelection, computerSelection = computerPlay()) {
  let playerHand = playerSelection.toUpperCase();
  let compHand = computerSelection;
  console.log(playerHand);
  console.log(compHand);
  if (playerHand === compHand) {
      let result = "Draw! Play again";
      return result;
  } else if (playerHand === "ROCK" && compHand === "SCISSORS") {
      let result = "You win!";
      return result;
  } else if (playerHand === "ROCK" && compHand === "PAPER") {
      let result = "You lose!";
      return result;
  } else if (playerHand === "SCISSORS" && compHand === "PAPER") {
      let result = "You win!";
      return result;
  } else if (playerHand === "SCISSORS" && compHand === "ROCK") {
      let result = "You lose!";
      return result;
  } else if (playerHand === "PAPER" && compHand === "ROCK") {
      let result = "You win!";
      return result;
  } else if (playerHand === "PAPER" && compHand === "SCISSORS") {
      let result = "You lose!";
      return result;
  } else {
      let result = "Please input either Rock, Paper, or Scissors.";
      return result;
  }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose Your Weapon", "Rock, Paper, or Scissors");
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        switch (result) {
            case ("You win!"):
                ++playerScore;
                break;
            case ("You lose!"):
                ++computerScore;
                break;
            default:
                console.log("No points awarded!");      
        }
        console.log(`Your score is ${playerScore}`);
        console.log(`CPU Player score is ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You defeated the machine menace!");
    } else if (playerScore < computerScore) {
        console.log("You lost! You will suffer a horrible fate.");
    } else {
        console.log("Draw! You both live to fight another day...");
    }
    
    console.log("Game Over! Please refresh the page to play again.");
}

const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
