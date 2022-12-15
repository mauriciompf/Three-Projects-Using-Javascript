let countEl = document.getElementById("count-el")
let count = 0

function increment() {
	count += 1
	countEl.innerText = count
}

function save() {


	console.log(count)
}

// save();

// ====================
// test _1.html
// ====================

let welcomeEl = document.getElementById("welcome-el")
let name = "Maurício"
let greeting = "Hi, my name is" + " " + name

welcomeEl.innerText = greeting