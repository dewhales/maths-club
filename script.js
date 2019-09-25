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
	}else if(num1.value.length > 0 && num2.value.length > 0 && operator.value == "modulus") {
		resultBasic.value = Math.floor(parseFloat(num1.value) / parseFloat(num2.value)) + " rem " + parseFloat(num1.value) % parseFloat(num2.value);
	}else if(num1.value.length > 0 && operator.value == "square root") {
		num2.value = 0;
		resultBasic.value = Math.sqrt(parseFloat(num1.value));
	}else if(num1.value.length > 0 && operator.value == "cube root") {
		num2.value = 0;
		resultBasic.value = Math.cbrt(parseFloat(num1.value));
	}else if(operator.value == "select operator") {
		alert("Syntax Error");
		num1.value = 0;
		num2.value = 0;
	}else {
		alert("Maths Error!");
	}
}

// Reset button for basic calculator
function resetCalculator() {
	let num1 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let operator = document.querySelector("#sign");
	let resultBasic = document.querySelector("#result-bas");
	num1.value = "";
	num2.value = "";
	resultBasic.value = "";
	operator.value = document.querySelector("#option1").value;
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
let submitCircle = document.querySelector("#submit-cir");
const finalAnserOnClick = () => {
	let radius = document.querySelector('#cir-radius').value;
	let area = document.querySelector('#cir-area').value;
	let circumference = document.querySelector("#cir-circumference").value;
	if (parseFloat(radius) > 0) {
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

let resetCircle = document.querySelector("#reset-cir");
function resetCircleCalculator() {
	let radius = document.querySelector("#cir-radius");
	let area = document.querySelector("#cir-area");
	let circumference = document.querySelector("#cir-circumference");
	radius.value = "";
	area.value = "";
	circumference.value = "";
}

/*Event Listeners for Circle Calculations*/
submitCircle.addEventListener("click", finalAnserOnClick);
resetCircle.addEventListener("click", resetCircleCalculator);

// CIRCLE CALCULATOR FUNCTIONS ENDS HERE---!



// Triangle Calculator Starts---!


/*Calculate Area of Triangle and
Calculate Perimeter if isosceles Triangle*/

let submitTriangle = document.querySelector("#submit-tri");
function submitTriangleCalculator() {
	let triBase = document.querySelector("#tri-base");
	let triHeight = document.querySelector("#tri-height");
	let triArea = document.querySelector("#tri-area");
	let triPerimeter = document.querySelector("#tri-perimeter");
	if(triBase.value.length > 0 && triHeight.value.length > 0) {
		let result = (parseFloat(triBase.value) * parseFloat(triHeight.value)) / 2;
		triArea.value = result;
		let slantHeight = Math.sqrt(parseFloat(triBase.value **2) + parseFloat(triHeight.value **2));
		let resultPer = parseFloat(slantHeight) + parseFloat(slantHeight) + parseFloat(triBase.value);
		triPerimeter.value = resultPer;
	}else if(triBase.value.length > 0 && triArea.value.length > 0) {
		let result = (parseFloat(triArea.value) * 2) / parseFloat(triBase.value);
		triHeight.value = result;
		let slantHeight = Math.sqrt(parseFloat(triBase.value **2) + parseFloat(triHeight.value **2));
		let resultPer = parseFloat(slantHeight) + parseFloat(slantHeight) + parseFloat(triBase.value);
		triPerimeter.value = resultPer;
	}else if(triHeight.value.length > 0 && triArea.value.length > 0) {
		let result = (parseFloat(triArea.value) * 2) / parseFloat(triHeight.value);
		triBase.value = result;
		let slantHeight = Math.sqrt(parseFloat(triBase.value **2) + parseFloat(triHeight.value **2));
		let resultPer = parseFloat(slantHeight) + parseFloat(slantHeight) + parseFloat(triBase.value);
		triPerimeter.value = resultPer;
	}
}


// Reset button for triangle calculator
let resetTriangle = document.querySelector("#reset-tri");
function resetTriangleCalculator() {
	let triBase = document.querySelector("#tri-base");
	let triHeight = document.querySelector("#tri-height");
	let triArea = document.querySelector("#tri-area");
	let triPerimeter = document.querySelector("#tri-perimeter");
	triBase.value = "";
	triHeight.value = "";
	triArea.value = "";
	triPerimeter.value = "";
}

/*Event Listeners for Circle Calculations*/
submitTriangle.addEventListener("click", submitTriangleCalculator);
resetTriangle.addEventListener("click", resetTriangleCalculator);

// TRIANGLE CALCULATOR FUNCTIONS ENDS HERE---!



// Rectangle Calculator Starts---!

// calculate Area of Rectangle/Square
let submitRectangle = document.querySelector("#submit-rect");
function submitRectangleCalculator () {
	let rectBreadth = document.querySelector("#rect-breadth");
	let rectLength = document.querySelector("#rect-length");
	let rectArea = document.querySelector("#rect-area");
	let rectPerimeter = document.querySelector("#rect-perimeter");
	if(rectLength.value.length > 0 && rectBreadth.value.length > 0) {
		rectArea.value = parseFloat(parseFloat(rectBreadth.value) * parseFloat(rectLength.value));
		rectPerimeter.value = parseFloat((2 * (parseFloat(rectLength.value)) + (2*(parseFloat(rectBreadth.value)))));
	}else if(rectLength.value.length > 0 && rectArea.value.length > 0) {
		rectBreadth.value = parseFloat(rectArea.value / rectLength.value);
	}else if(rectBreadth.value.length > 0 && rectArea.value.length > 0) {
		rectLength.value = parseFloat(rectArea.value / rectBreadth.value);
	}else if(rectPerimeter.value.length > 0) {
		rectLength.value = parseFloat(rectPerimeter.value / 4);
		rectBreadth.value = rectLength.value;
		rectArea.value = parseFloat(rectLength.value * rectBreadth.value);
		rectLength.value = Math.sqrt(rectArea.value);
		rectBreadth.value = Math.sqrt(rectArea.value);
		rectPerimeter.value = parseFloat((2 * (parseFloat(rectLength.value)) + (2*(parseFloat(rectBreadth.value)))));
		alert("This is applicable to SQUARE's only!!!");
	}else if(rectArea.value.length > 0) {
			rectLength.value = Math.sqrt(rectArea.value);
		rectBreadth.value = Math.sqrt(rectArea.value);
		rectPerimeter.value = parseFloat((2 * (parseFloat(rectLength.value)) + (2*(parseFloat(rectBreadth.value)))));
		alert("This is applicable to SQUARE's only!!!");
	}else if(rectLength.value.length > 0 || rectBreadth.value.length > 0) {
		rectBreadth.value = rectLength.value;
		rectArea.value = rectLength.value * rectBreadth.value;
		rectPerimeter.value = parseFloat((2 * (parseFloat(rectLength.value)) + (2*(parseFloat(rectBreadth.value)))));
		alert("This is applicable to SQUARE's only!!!");
	}
}

let resetRectangle = document.querySelector("#reset-rect");
function resetRectangleCalculator () {
	let rectBreadth = document.querySelector("#rect-breadth");
	let rectLength = document.querySelector("#rect-length");
	let rectArea = document.querySelector("#rect-area");
	let rectPerimeter = document.querySelector("#rect-perimeter");
	rectLength.value = "";
	rectBreadth.value = "";
	rectArea.value = "";
	rectPerimeter.value = "";
}
/*Event Listeners for Rectangle/Square Calculations*/
submitRectangle.addEventListener("click", submitRectangleCalculator);
resetRectangle.addEventListener("click", resetRectangleCalculator);

// RECTANGLE/SQUARE CALCULATOR FUNCTIONS ENDS HERE---!



// Parallelogram Calculator Starts---!

// calculate Area of Parallelogram
let submitParallelogram = document.querySelector("#submit-par");
function submitParallelogramCalculator() {
	let parBase = document.querySelector("#par-base");
	let parHeight = document.querySelector("#par-height");
	let parArea = document.querySelector("#par-area");
	if(parBase.value.length > 0 && parHeight.value.length > 0) {
	parArea.value = parseFloat(parBase.value * parHeight.value);
	}else if(parArea.value.length > 0 && parBase.value.length > 0) {
		parHeight.value = parseFloat(parArea.value / parBase.value);
	}else if (parArea.value.length > 0 && parHeight.value.length > 0) {
		parBase.value = parseFloat(parArea.value / parHeight.value);
	}
}

// Function to reset Parallelogram calculator
let resetParallelogram = document.querySelector("#reset-par");
function resetParallelogramCalculator () {
	let parBase = document.querySelector("#par-base");
	let parHeight = document.querySelector("#par-height");
	let parArea = document.querySelector("#par-area");
	parBase.value = "";
	parHeight.value = "";
	parArea.value = "";
}

// Event Listeners for Parallelogram Calculations
submitParallelogram.addEventListener("click", submitParallelogramCalculator);
resetParallelogram.addEventListener("click", resetParallelogramCalculator);

// PARALLELOGRAM CALCULATOR FUNCTIONS ENDS HERE---!



// Trapezium Calculator Starts---!

// calculate Area of Trapezium
let submitTrapezium = document.querySelector("#submit-trap");
function submitTrapeziumCalculator() {
	let trapA = document.querySelector("#trap-a");
	let trapB = document.querySelector("#trap-b");
	let trapHeight = document.querySelector("#trap-height");
	let trapArea = document.querySelector("#trap-area");
	if(trapA.value.length > 0 && trapB.value.length > 0 && trapHeight.value.length > 0) {
		trapArea.value = (parseFloat(trapA.value) + parseFloat(trapB.value)) * (parseFloat(trapHeight.value) / 2);
	}else if(trapArea.value.length > 0 && trapA.value.length > 0 && trapB.value.length > 0) {
		trapHeight.value = parseFloat((parseFloat(trapArea.value) * 2) / (parseFloat(trapA.value) + parseFloat(trapB.value)));
	}else {
		alert("Can Calculate for the value of AREA or HEIGHT only");
	}
}

// Function to reset Trapezium Calculator
let resetTrapezium = document.querySelector("#reset-trap");
function resetTrapeziumCalculator () {
	let trapA = document.querySelector("#trap-a");
	let trapB = document.querySelector("#trap-b");
	let trapHeight = document.querySelector("#trap-height");
	let trapArea = document.querySelector("#trap-area");
	trapA.value = "";
	trapB.value = "";
	trapHeight.value = "";
	trapArea.value = "";
}

// Event Listeners for Trapezium Calculations
submitTrapezium.addEventListener("click", submitTrapeziumCalculator);
resetTrapezium.addEventListener("click", resetTrapeziumCalculator);