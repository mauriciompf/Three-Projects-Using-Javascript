let num1 = 1
let num2 = 4

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let number = document.getElementById("sum-el")

let greetingSum = "Sum: " + num1 + " + " + num2 + " = " 
let greetingSubtract = "Subtract: " + num1 + " - " + num2 + " = " 
let greetingDivide = "Divide: " + num1 + " / " + num2 + " = "
let greetingMultiply = "Multiply: " + num1 + " * " + num2 +  " = "

let resultSum = num1 + num2
let resultSubtract = (num1 - num2)
let resultDivide = num1 / num2
let resultMultiply = num1 * num2

function add() {
	number.textContent = greetingSum + resultSum
}

function subtract() {
	number.textContent = greetingSubtract + resultSubtract
}

function divide() {
	number.textContent = greetingDivide + resultDivide
}

function multiply() {
	number.textContent = greetingMultiply  + resultMultiply
}