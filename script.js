// important constants and variables
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let result;
let roundResult;


function computerPlay() { //generates CPU Player's answer randomly
  let random = ['ROCK', 'PAPER', 'SCISSORS'];
  let computerHand = random[Math.floor(Math.random() * random.length)];
  return computerHand;
}

// This function plays 1 round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection = computerPlay()) {
  let playerHand = playerSelection.toUpperCase();
  let compHand = computerSelection;
  if (playerHand === compHand) {
    let result = "Draw! Play again.";
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
  console.log(result);
}

function keepScore(roundResult) { // Keeps score between and after rounds
  if (roundResult === "You win!") {
    ++playerScore;
    return playerScore;
    return computerScore;
  } else if (roundResult === "You lose!") {
    ++computerScore;
    return computerScore;
    return playerScore;
  } else {
    return computerScore;
    return playerScore;
  }
}

function displaySelection(playerSelection, computerSelection) { //displays the choice chosen
  computerHand = computerSelection;
  playerHand = playerSelection;
  const div = document.querySelector('div');
  const para = document.createElement('p');
  para.textContent = `You chose ${playerHand} and the CPU chose ${computerHand}`;
  div.appendChild(para);
}

function displayScore(roundResult, playerScore, computerScore) {
  const div = document.querySelector('div');
  const para = document.createElement('p');
  para.textContent = `${roundResult} Your score is ${playerScore} and the CPU score is ${computerScore}`;
  div.appendChild(para);
}

function declareWinner(playerScore, computerScore) { // declares final winner
  if (playerScore === 5 || computerScore === 5) {
    const div = document.querySelector('div');
    const para = document.createElement('p');
    para.textContent = `The game is over! Your final score is ${playerScore} and the CPU final score is ${computerScore}. \n Refresh the page to start a new game!`;
    div.appendChild(para);
  }
}

//Plays a round when a button is pressed and increments score, then declares winner if score = 5
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    displaySelection(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    keepScore(roundResult);
    displayScore(roundResult, playerScore, computerScore);
    declareWinner(playerScore, computerScore);
  })
})