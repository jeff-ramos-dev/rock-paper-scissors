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
        userInput = prompt("Rock, Paper, or Scissors?").toLowerCase()
    } 
    userChoice = userInput 
    return userChoice
}

// Write function to play 1 round
function rockPaperScissors(computerSelection, playerSelection) {
// check player choice and computer choice against the hashmap to determine result
    let player = rules[playerSelection]
    console.log("player = ", player)
    result = player[computerSelection]
// display result  
    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)
    console.log(result)
}

rockPaperScissors(getComputerChoice(), getPlayerChoice())