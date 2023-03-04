// Set up rules in a hashmap
const Rock = {"rock": "draw", "paper": "lose", "scissors": "win"}
const Paper = {"rock": "win", "paper": "draw", "scissors": "lose"}
const Scissors = {"rock": "lose", "paper": "win", "scissors": "draw"}
const rules = {"rock": Rock, "paper": Paper, "scissors": Scissors}

// Write function to get Computer choice
function getComputerChoice() {
// create array of choices
    let choices = Object.keys(rules)
// choose random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3)
// use number to select from choice array
    let compChoice = choices[randomNum]
// return computer choice 
    return compChoice
}

// Write function to get Player choice
function getPlayerChoice() {
// create array of choices
    let choices = Object.keys(rules)
// Prompt user to make selection
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase()
// Validate that it matches either "rock", "paper", or "scissors"
    while (!choices.includes(userInput)) {
// If not, display an error message, and reprompt the user
        console.log("Invalid choice.")
        userInput = prompt("Invalid Choice. Try again.\nRock, Paper, or Scissors?").toLowerCase()
    } 
    userChoice = userInput 
    return userChoice
}

// Write function to play 1 round
function playRound(computerSelection, playerSelection) {
// check player choice and computer choice against the hashmap to determine result
    let player = rules[playerSelection]
    result = player[computerSelection]
// display result  
    if (result === "win") {
        console.log(`You won this round! ${playerSelection} beats ${computerSelection}`)
    } else if (result === "lose") {
        console.log(`You lost this round. ${computerSelection} beats ${playerSelection}`)
    } else {
        console.log(`This round was a draw! You both chose ${playerSelection}`)
    }
    return result
}

function getRounds() {
    rounds = Number(prompt("How many rounds?", _default=3))
    while (typeof(rounds) !== "number") {
        rounds = Number(prompt("Please enter a number.\nHow many rounds?"))
    }
    rounds = Math.round(rounds)
    return rounds
}
// Write function to play game
// Set parameter to determine how many rounds
function game(rounds) {
// Initialize scores
    let computerScore = 0
    let playerScore = 0
    let result
// Run loop for number of rounds
    for (let i = 0; i < rounds; i++) {
        result = playRound(getComputerChoice(), getPlayerChoice())
        if (result === "win") {
            playerScore += 1
        } else if (result === "lose") {
            computerScore += 1
        } 
        
        console.log("Player: ", playerScore)
        console.log("Computer: ", computerScore)
    }
    let endResult
    if (playerScore > computerScore) {
        endResult = "win"
        console.log("YOU WIN!")
    } else if (playerScore < computerScore) {
        endResult = "lose"
        console.log("YOU LOSE")
    } else {
        endResult = "draw"
        console.log("IT'S A DRAW")
    }
    return endResult
}

game(getRounds())