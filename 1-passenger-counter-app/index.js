let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
	count += 1
	countEl.textContent = count
}

function decrement() {
	count -= 1
	countEl.textContent = count
}

function save() {
	let saveP = count + " - "
	saveEl.textContent += saveP

	count = 0
	countEl.textContent = count
}

// save();

// ====================
// test _1.html
// ====================

let welcomeEl = document.getElementById("welcome-el")
let name = "Maurício"
let greeting = "Hi, my name is" + " " + name

welcomeEl.innerText = greeting