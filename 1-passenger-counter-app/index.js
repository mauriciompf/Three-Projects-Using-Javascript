
// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;

// let secondBatch = 8;

// let count = firstBatch + secondBatch;

// console.log(count);


// let myAge = 20;

// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge);


// count + 1
// let count = 2

// count = count * 9

// console.log(count)

// let bonusPoints = 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints * 2
// console.log(bonusPoints)

// bonusPoints = bonusPoints / 4
// console.log(bonusPoints)

// bonusPoints = bonusPoints * 3
// console.log(bonusPoints)


// function numberLog() {
// 	console.log(42)
// }

// numberLog()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum() {
// 	console.log(lap1 + lap2 + lap3) 
// }
// lapSum()


// let lapsCompleted = 0

// function countLaps() {
// 	lapsCompleted = lapsCompleted + 1
// }
// countLaps()
// countLaps()
// countLaps()
// console.log(lapsCompleted)

// let username = "per"
// let message = "You have three now notifications"
// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// let name = "Maurício"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting) 

let count = 0

function increment() {
	let countEl = document.getElementById("count-el")

	count = count + 1

	countEl.innerHTML = count

}

function save() {
	console.log(count)
}

// save();

// ====================
// test _1.html
// ====================
/*global console , $ , document*/
/*eslint-disable no-console*/

let welcomeEl = document.getElementById("welcome-el")
let name = "Maurício"
let greeting = "Hi, my name is" + " " + name

welcomeEl.innerText = greeting
