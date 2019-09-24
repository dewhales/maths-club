const PI = 3.142857142857143;

/*Calculator for add, subtract, multiply, divide, modulus, power, square root and cube root.*/
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
		num2.value = 0;
		resultBasic.value = Math.sqrt(parseFloat(num1.value));
	}else if(num1.value.length > 0 && operator.value == "cube root") {
		num2.value = 0;
		resultBasic.value = Math.cbrt(parseFloat(num1.value));
	}else if(operator.value == "select operator") {
		let synError = document.querySelector("#error");
		synError.textContent = "Syntax Error";
		operator.value = synError;
		synError.setAttribute("selected","selected");
		num1.value = 0;
		num2.value = 0;
	}else {
		let synError = document.querySelector("#error");
		synError.textContent = "Syntax Error";
		operator.value = synError;
		synError.setAttribute("selected","selected");
	}
}

// Reset button for basic calculator
function resetCalculator() {
	let num2 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let operator = document.querySelector("#sign");
	let resultBasic = document.querySelector("#result-bas");
	num1.value = "";
	num2.value = "";
	operator.value = document.querySelector("#option1").value;
	operator.removeChild(document.querySelector("#error"));
	resultBasic.value = "";
}


let submitBasic = document.querySelector("#submit-bas");
let resetBasic = document.querySelector("#reset-bas");
/*Event Listeners for Basic Calculator*/
submitBasic.addEventListener("click", basicCalculator);
resetBasic.addEventListener("click", resetCalculator);

// BASIC CALCULATOR FUNCTIONS ENDS HERE---!


/*Circle Calculator Starts*/









/*Calculate Area formular(PI.r2)*/
const findValueOfArea = () => {
	let radius = document.querySelector("#cir-radius").value;
	let val = parseFloat(PI) * (parseFloat(radius **2));
	let area = document.querySelector('#cir-area').setAttribute('value', val);
}

/*Find Radius of the Circle Using the value of Area*/
const findValueOfRadiusA = () => {
	let area = document.querySelector('#cir-area').value;
	let val = Math.sqrt(parseFloat(area) / parseFloat(PI));
	let radius = document.querySelector("#cir-radius").setAttribute('value', val);
}

/*Find Circumference of the Circle using formular(2.PI.r)*/
const findValueOfCircumference = () => {
	let radius = document.querySelector("#cir-radius").value;
	let area = document.querySelector("#cir-area").value;
	let val = 2 * (parseFloat(PI) * parseFloat(radius));
	let circumference = document.querySelector("#cir-circumference").setAttribute('value', val);
}

/*Find Radius of the Circle Using the value of Circumference*/
const findValueOfRadiusC = () => {
	let circumference = document.querySelector("#cir-circumference").value;
	let val = parseFloat(circumference) / parseFloat(2 * parseFloat(PI));
	let radius = document.querySelector('#cir-radius').setAttribute('value', val)
}

/*Find the missing variable in the given Circle ON CLICK.*/
const finalAnserOnClick = () => {
	let radius = document.querySelector('#cir-radius').value;
	let area = document.querySelector('#cir-area').value;
	let circumference = document.querySelector("#cir-circumference").value;
	if (parseFloat(radius) > 0) {;
		findValueOfArea();
		findValueOfCircumference();
	} else if (parseFloat(area) > 0) {
		findValueOfRadiusA();
		findValueOfCircumference();
	} else if (parseFloat(circumference) > 0) {
		findValueOfRadiusC();
		findValueOfArea();
	}
}

function resetCircleCalculator() {
	let radius = document.querySelector("#cir-radius");
	let area = document.querySelector("#cir-area");
	let circumference = document.querySelector("#cir-circumference");
	radius.value = "";
	area.value = "";
	circumference.value = "";
}

let submitCircle = document.querySelector("#submit-cir");
let resetCircle = document.querySelector("#reset-cir");
/*Event Listeners for Circle Calculations*/
submitCircle.addEventListener('click', finalAnserOnClick);
resetCircle.addEventListener("click", resetCircleCalculator);