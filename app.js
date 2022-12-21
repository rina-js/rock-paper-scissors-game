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
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`)
    return DEFAULT_USER_CHOICE
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

const getWinner = (cChoice, pChoice) =>
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

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log("Game's starting")
  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()
  const winner = getWinner(computerChoice, playerChoice)
  let message
  if (winner === RESULT_DRAW) {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you had a draw`
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you won`
  } else {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore computer won`
  }
  alert(message)
  gameIsRunning = false
})