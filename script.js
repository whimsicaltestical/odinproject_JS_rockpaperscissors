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
  console.log(computerSelection);
  if (playerHand === compHand) {
      return "Draw! Play again"
  } else if (playerHand === "ROCK" && compHand === "SCISSORS") {
      return "You win! Rock beats Scissors!";
  } else if (playerHand === "ROCK" && compHand === "PAPER") {
      return "You lose! Paper beats Rock!";
  } else if (playerHand === "SCISSORS" && compHand === "PAPER") {
      return "You win! Scissors beats Paper!";
  } else if (playerHand === "SCISSORS" && compHand === "ROCK") {
      return "You lose! Rock beats Scissors!";
  } else if (playerHand === "PAPER" && compHand === "ROCK") {
      return "You win! Paper beats Rock!";
  } else if (playerHand === "PAPER" && compHand === "SCISSORS") {
      return "You lose! Scissors beats Paper!";
  } else {
      return "Please input either Rock, Paper, or Scissors.";
  }
}

const computerSelection = computerPlay();
