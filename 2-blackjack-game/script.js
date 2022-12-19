// Blackjack logic win and lose
let fcard = 10
let scard = 4
let cards = [fcard, scard]
let sum = fcard + scard
let hasBackJack = false
let isAlive = true
let messageEl = document.querySelector("#message-el")
let cardEl = document.querySelector(".card-el")
let sumEl = document.querySelector(".sum-el")
let message = " "

function startGame() {
	renderGame()
}

function renderGame() {
	cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
 	sumEl.textContent = "Sum: " + sum
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "Wohoo!, You've got Blackjack!"
		hasBackJack = true
	} else {
		message = "You are out of the game!"
		isAlive = false
	}
	messageEl.textContent = message
}

function newCard() {
	let card = 11
	sum += card
	startGame()
}

// Old enough for enter the club
let age = 22

let ageEnter = 21

if (age >= ageEnter) {
	console.log("Welcome!")
} else {
	console.log("You can not enter the club")
}

// Old enough for a birthday card from the King (100)
if (age < 100) {
	console.log("Not a elegible")
} else if (age === 100) {
	console.log("Here is your birthday card from the King!")
} else {
	console.log("Not elegible, you have already gotten one")
}