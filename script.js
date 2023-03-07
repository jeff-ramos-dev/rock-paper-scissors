// hashmaps of outcomes for each player choice
const Rock = {"rock": "draw", "paper": "lose", "scissors": "win"}
const Paper = {"rock": "win", "paper": "draw", "scissors": "lose"}
const Scissors = {"rock": "lose", "paper": "win", "scissors": "draw"}
const rules = {"rock": Rock, "paper": Paper, "scissors": Scissors}
const scores = {"Player": 0, "Computer": 0}

const body = document.querySelector('body')

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')

const rockButton = document.createElement('button')
rockButton.classList.add('rock')
rockButton.textContent = 'ROCK'

const paperButton = document.createElement('button')
paperButton.classList.add('paper')
paperButton.textContent = 'PAPER'

const scissorsButton = document.createElement('button')
scissorsButton.classList.add('scissors')
scissorsButton.textContent = 'SCISSORS'

const div = document.createElement('div')
div.classList.add('container')

const results = document.createElement('p')
results.classList.add('results')

const computerScoreDisplay = document.createElement('p')
computerScoreDisplay.classList.add('scores')
computerScoreDisplay.textContent = `Computer: ${scores["Computer"]}`

const playerScoreDisplay = document.createElement('p')
playerScoreDisplay.classList.add('scores')
playerScoreDisplay.textContent = `Player: ${scores["Player"]}`

const resetButton = document.createElement('button')
resetButton.classList.add('reset')
resetButton.textContent = 'RESET'

body.appendChild(buttonContainer)
buttonContainer.appendChild(rockButton)
buttonContainer.appendChild(paperButton)
buttonContainer.appendChild(scissorsButton)
body.appendChild(div)
div.appendChild(results)
div.appendChild(computerScoreDisplay)
div.appendChild(playerScoreDisplay)
body.appendChild(resetButton)


rockButton.addEventListener('click', () => {
    if (scores["Player"] < 5 && scores["Computer"] < 5) {
        playRound(getComputerChoice(), 'rock')
    }
})
paperButton.addEventListener('click', () => {
    if (scores["Player"] < 5 && scores["Computer"] < 5) {
        playRound(getComputerChoice(), 'paper')
    }
})
scissorsButton.addEventListener('click', () => {
    if (scores["Player"] < 5 && scores["Computer"] < 5) {
        playRound(getComputerChoice(), 'scissors')
    }
})

resetButton.addEventListener('click', resetGame)

function resetGame() {
    scores["Computer"] = 0
    scores["Player"] = 0
    computerScoreDisplay.textContent = `Computer: ${scores["Computer"]}`
    playerScoreDisplay.textContent = `Player: ${scores["Player"]}`
    results.textContent = ""
}

function getComputerChoice() {
    let choices = Object.keys(rules)
    let randomNum = Math.floor(Math.random() * 3)
    let compChoice = choices[randomNum]
    return compChoice
}

function playRound(computerSelection, playerSelection) {
    let player = rules[playerSelection]
    let result = player[computerSelection]
    if (result === "win") {
        results.textContent = `You WON this round! ${playerSelection} beats ${computerSelection}`
        scores["Player"] += 1
        computerScoreDisplay.textContent = `Computer: ${scores["Computer"]}`
        playerScoreDisplay.textContent = `Player: ${scores["Player"]}`
    } else if (result === "lose") {
        results.textContent = `You LOST this round. ${computerSelection} beats ${playerSelection}`
        scores["Computer"] += 1
        computerScoreDisplay.textContent = `Computer: ${scores["Computer"]}`
        playerScoreDisplay.textContent = `Player: ${scores["Player"]}`
    } else {
        results.textContent = `This round was a DRAW! You both chose ${playerSelection}`
    }
    if (scores["Computer"] >= 5) {
        results.textContent = 'COMPUTER WINS!'
    } else if (scores["Player"] >= 5) {
        results.textContent = 'PLAYER WINS!'
    }
    return result
}
