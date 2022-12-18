// Blackjack logic win and lose
let fcard = 11
let scard = 10
let sum = fcard + scard
let hasBackJack = false
let isAlive = true

let message = " "

function startGame() {
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "Wohoo!, You've got Blackjack!"
		hasBackJack = true
	} else {
		message = "You are out of the game!"
		isAlive = false
	}
	console.log(message)
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