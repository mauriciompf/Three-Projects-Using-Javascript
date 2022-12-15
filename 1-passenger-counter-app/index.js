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

let welcomeEl = document.getElementById("welcome-el")
let name = "Maurício"
let greeting = "Hi, my name is" + " " + name

welcomeEl.innerText = greeting