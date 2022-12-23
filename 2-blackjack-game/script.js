// Blackjack logic win and lose

// logic data type
let cards = [] /*[fcard, scard]*/
let sum = 0 /*fcard + scard*/
let hasBackJack = false
let isAlive = false

// Get elementy in document  
let messageEl = document.querySelector("#message-el")
let cardEl = document.querySelector(".card-el")
let sumEl = document.querySelector(".sum-el")
let message = " "

// Random Card Function
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	
	if (randomNumber === 1) {
		return 11
	} else if (randomNumber > 10) {
		return 10
	} else {
		return randomNumber
	}
}

// Start the game using function renderGame()
function startGame() {
	isAlive = true;
	
	let fCard = getRandomCard()
	let sCard = getRandomCard()

	cards = [fCard, sCard]
	sum = cards[0] + cards[1]

	renderGame()
}

// All the logic of the game 
function renderGame() {
	// show all the cards in "cards:" 
	cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

	for (i = 2; i < cards.length; i++) {
		cardEl.textContent += " " + cards[i]
	}

 	sumEl.textContent = "Sum: " + sum

 	// sum the numbers and display out the message
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
	let card = getRandomCard()
	sum += card
	cards.push(card)
	renderGame()
}

// Old enough for enter the club
// let age = 22

// let ageEnter = 21

// if (age >= ageEnter) {
// 	console.log("Welcome!")
// } else {
// 	console.log("You can not enter the club")
// }

// Old enough for a birthday card from the King (100)
// if (age < 100) {
// 	console.log("Not a elegible")
// } else if (age === 100) {
// 	console.log("Here is your birthday card from the King!")
// } else {
// 	console.log("Not elegible, you have already gotten one")
// }

// Counting