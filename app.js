const startGameBtn = document.getElementById("start-game-btn")

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK

const RESULT_DRAW = "DRAW"
const RESULT_PLAYER_WINS = "PLAYER WINS"
const RESULT_COMPUTER_WINS = "COMPUTER WINS"

let gameIsRunning = false

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase()
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice!`)
    return
  }
  return selection
}

const getComputerChoice = function () {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS

// if (cChoice === pChoice) {
//   return RESULT_DRAW
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS
// } else {
//   return RESULT_COMPUTER_WINS
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log("Game's starting")
  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()

  let winner
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice)
  } else {
    winner = getWinner(computerChoice)
  }

  let message
  if (winner === RESULT_DRAW) {
    message = `You picked ${
      playerChoice || DEFAULT_USER_CHOICE
    }, computer picked ${computerChoice}, therefore you had a draw`
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you won`
  } else {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore computer won`
  }
  alert(message)
  gameIsRunning = false
})
