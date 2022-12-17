// Blackjack logic win and lose

let fcard = 10
let scard = 16

let sum = fcard + scard


if (sum < 21) {
	console.log("Do you want to draw a new card?")
} else if (sum === 21) {
	console.log("You've got Blackjack!")
} else {
	console.log("You're out of the game!")
}

// Old enough to enter the club

let age = 20

let ageEnter = 21

if (age >= ageEnter) {
	console.log("Welcome!")
} else {
	console.log("You can not enter the club")
}