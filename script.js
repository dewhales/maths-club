const PI = 3.142857142857143;

/*Calculator for add, subtract, multiply, divide, modulus, power, square root and cube root.*/
let submitBasic = document.querySelector("#submit-bas");
function basicCalculator () {
	let num1 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let operator = document.querySelector("#sign");
	let resultBasic = document.querySelector("#result-bas")
	if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "+") {
		resultBasic.value = parseFloat(num1.value) + parseFloat(num2.value);
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "-") {
		resultBasic.value = parseFloat(num1.value) - parseFloat(num2.value);
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "*") {
		resultBasic.value = parseFloat(num1.value) * (num2.value);
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "/") {
		resultBasic.value = parseFloat(num1.value) / parseFloat(num2.value);
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "power") {
		resultBasic.value = parseFloat(num1.value) ** parseFloat(num2.value);
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "%") {
		resultBasic.value = parseFloat(num1.value) % parseFloat(num2.value);
	}else if(num1.value.length > 0 && operator.value == "square root") {
		num2.setAttribute("readonly", "readonly");
		num2.value = 0;
		resultBasic.value = Math.sqrt(parseFloat(num1.value));
	}else if(num1.value.length > 0 && operator.value == "cube root") {
		num2.setAttribute("readonly", "readonly");
		num2.value = 0;
		resultBasic.value = Math.cbrt(parseFloat(num1.value));
	}else {
		operator.value = "Syntax Error";
		num1.value = 0;
		num2.value = 0;
	}
}

// Reset button for basic calculator
let resetBasic = document.querySelector("#reset-bas");
function resetCalculator() {
	let num1 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let operator = document.querySelector("#sign");
	let resultBasic = document.querySelector("#result-bas")
	num1.value = 0;
	num2.value = 0;
	operator.value = "";
	resultBasic.value = 0;
}
/*Event Listeners for Basic Calculator*/
submitBasic.addEventListener("click", basicCalculator);
resetBasic.addEventListener("click", resetCalculator);

// BASIC CALCULATOR FUNCTIONS ENDS HERE---!


/*Circle Calculator Starts*/









