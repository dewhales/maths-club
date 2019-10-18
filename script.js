const PI = 3.142857142857143;
const RAD = 57.29577951;

/*Calculator for add, subtract, multiply, divide, modulus, power, square root and cube root.*/
function basicCalculator () {
	let num1 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let operator = document.querySelector("#sign");
	let resultBasic = document.querySelector("#result-bas");
	let base = [];
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
	}else if(num1.value.length > 0 && num2.value == 10 && operator.value == "logarithm") {
		resultBasic.value = Math.log10(num1.value);
	}else if(num1.value.length > 0 && num2.value == 2 && operator.value == "logarithm") {
		resultBasic.value = Math.log2(num1.value);
	}else if(num1.value.length > 0 && operator.value == "square root") {
		num2.value = 0;
		resultBasic.value = Math.sqrt(parseFloat(num1.value));
	}else if(num1.value.length > 0 && operator.value == "cube root") {
		num2.value = 0;
		resultBasic.value = Math.cbrt(parseFloat(num1.value));
	}else if(num2.value.length > 0 && operator.value == "random number") {
		num1.value = 10;
		resultBasic.value = Math.floor(Math.random() * Math.pow(10, num2.value));
	}else if(operator.value == "select operator") {
		alert("Syntax Error");
		resultBasic.value = "";
	}else {
		alert("Math Error!");
		resultBasic.value = "";
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


/*Calculate Area of Circle*/
// let submitCircle = document.querySelector("#submit-cir");
// function submitCircleCalculator() {
// 	let cirArea = document.querySelector("#cir-area");
// 	let cirRadius = document.querySelector("#cir-radius");
// 	let cirCircumference = document.querySelector("#cir-circumference");
// 	let cirAngle = document.querySelector("#cir-angle");
// 	let cirSector = document.querySelector("#cir-sector");
// 	let cirPI = document.querySelector("#cir-pi");
// 	if(cirSector.value.length > 0 && cirRadius.value.length > 0 && cirPI.value.length > 0) {
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirRadius.value = (parseFloat(cirCircumference.value) / (parseFloat(2) * parseFloat(PI)));
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 		cirAngle.value = Math.round(parseFloat(parseFloat(cirSector.value) * 360) / (parseFloat(cirArea.value)));
// 	}else if(cirRadius.value.length > 0 && cirAngle.value.length > 0 && cirPI.value.length > 0){
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 		cirSector.value = parseFloat(parseFloat(cirAngle.value) / parseFloat(360)) * parseFloat(cirArea.value);
// 	}else if(cirAngle.value.length > 0 && cirSector.value.length > 0 && cirPI.value.length > 0){
// 		if(cirAngle.value >= 7 && cirSector.value.length > 0) {
// 			cirRadius.value = Math.sqrt(parseFloat((2 * parseFloat(cirSector.value))) / (parseFloat(cirAngle.value) / parseFloat(RAD)));
// 		}else if(cirAngle.value < 7 && cirAngle.value >= 0 && cirSector.value.length > 0) {
// 			cirRadius.value = Math.sqrt(parseFloat((2 * parseFloat(cirSector.value))) / (parseFloat(cirAngle.value)));
// 		}
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 	}else if(cirRadius.value.length > 0 && cirPI.value.length > 0) {
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 	}else if(cirAngle.value.length > 0 && cirArea.value.length > 0 && cirPI.value.length > 0) {
// 		cirSector.value = parseFloat(parseFloat(cirAngle.value) / parseFloat(360)) * parseFloat(cirArea.value);
// 		cirRadius.value = (Math.sqrt(parseFloat(cirArea.value) / parseFloat(PI)));
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 	}else if(cirSector.value.length > 0 && cirArea.value.length > 0 && cirPI.value.length > 0) {
// 		cirAngle.value = Math.round(parseFloat(parseFloat(cirSector.value) * 360) / parseFloat(cirArea.value));
// 		cirRadius.value = parseFloat(Math.sqrt(parseFloat(cirArea.value) / parseFloat(PI)));
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 	}else if(cirSector.value.length > 0 && cirCircumference.value.length > 0 && cirPI.value.length > 0) {
// 		cirRadius.value = (parseFloat(cirCircumference.value) / (parseFloat(2) * parseFloat(PI)));
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 		cirAngle.value = Math.round(parseFloat(parseFloat(cirSector.value) * 360) / parseFloat(cirArea.value));
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 	}else if(cirAngle.value.length > 0 && cirArea.value.length > 0 && cirPI.value.length > 0) {
// 		cirRadius.value = (Math.sqrt(parseFloat(cirArea.value) / parseFloat(PI))) || (parseFloat(cirCircumference.value) / (parseFloat(2) * parseFloat(PI)));
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 	}else if(cirArea.value.length > 0 || cirCircumference.value.length > 0) {
// 		cirRadius.value = (Math.sqrt(parseFloat(cirArea.value) / parseFloat(PI))) || (parseFloat(cirCircumference.value) / (parseFloat(2) * parseFloat(PI)));
// 		cirCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cirRadius.value);
// 		cirArea.value = parseFloat(PI) * parseFloat(parseFloat(cirRadius.value) **2);
// 	}
// }

// /*Reset Circle Calculator*/
// let resetCircle = document.querySelector("#reset-cir");
// function resetCircleCalculator() {
// 	let cirRadius = document.querySelector("#cir-radius");
// 	let cirAngle = document.querySelector("#cir-angle");
// 	let cirSector = document.querySelector("#cir-sector");
// 	let cirArea = document.querySelector("#cir-area");
// 	let cirCircumference = document.querySelector("#cir-circumference");
// 	cirRadius.value = "";
// 	cirArea.value = "";
// 	cirSector.value = "";
// 	cirAngle.value = "";
// 	cirCircumference.value = "";
// }




// /*Event Listeners for Circle Calculations*/
// submitCircle.addEventListener("click", submitCircleCalculator);
// resetCircle.addEventListener("click", resetCircleCalculator);

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
		let slantHeight = Math.sqrt((parseFloat(triBase.value / 2) **2) + (parseFloat(triHeight.value) **2));
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
	}else if(rectPerimeter.value.length > 0 || rectArea.value.length > 0) {
		if(rectPerimeter.value.length > 0) {
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
		}
	}else if(rectLength.value.length > 0 || rectBreadth.value.length > 0) {
		if(rectLength.value.length > 0) {
			rectBreadth.value = rectLength.value;
			rectArea.value = rectLength.value * rectBreadth.value;
			rectPerimeter.value = parseFloat(2 * (parseFloat(rectLength.value)) + (2 * (parseFloat(rectBreadth.value))));
			alert("This is applicable to SQUARE's only!!!");
		}else if (rectBreadth.value.length > 0) {
			rectLength.value = rectBreadth.value;
			rectArea.value = rectLength.value * rectBreadth.value;
			rectPerimeter.value = parseFloat(2 * (parseFloat(rectLength.value)) + (2 * (parseFloat(rectBreadth.value))));
			alert("This is applicable to SQUARE's only!!!");
		}

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

// TRAPEZIUM CALCULATOR FUNCTIONS ENDS HERE---!



// Cylinder Calculator Starts---!

// Calculate Areas of Cylinder
let submitCylinder = document.querySelector("#submit-cyl");
function submitCylinderCalculator() {
	let cylRadius = document.querySelector("#cyl-radius");
	let cylHeight = document.querySelector("#cyl-height");
	let cylCircumference = document.querySelector("#cyl-circumference");
	let cylCba = document.querySelector("#cyl-cba");
	let cylCsa = document.querySelector("#cyl-csa");
	let cylTsa = document.querySelector("#cyl-tsa");
	let cylVolume = document.querySelector("#cyl-vol");
	let cylPI = document.querySelector("#cyl-pi");
	if(cylRadius.value.length > 0 && cylHeight.value.length > 0 && cylPI.value.length > 0) {
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylCba.value = parseFloat(PI) * parseFloat(parseFloat(cylRadius.value) **2);
		cylCsa.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value) * parseFloat(cylHeight.value);
		cylTsa.value = parseFloat((parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
	}else if(cylHeight.value.length > 0 && cylCba.value.length > 0 && cylPI.value.length > 0) {
		cylVolume.value = parseFloat(cylCba.value) * parseFloat(cylHeight.value);
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylCsa.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value) * parseFloat(cylHeight.value);
		cylTsa.value = parseFloat((parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
	}else if (cylVolume.value.length > 0 && cylCba.value.length > 0 && cylPI.value.length > 0) {
		cylHeight.value = parseFloat(cylVolume.value) / parseFloat(cylCba.value);
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylCsa.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value) * parseFloat(cylHeight.value);
		cylTsa.value = parseFloat((parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
	}else if(cylHeight.value.length > 0 && cylCircumference.value.length > 0 && cylPI.value.length > 0) {
		cylRadius.value = parseFloat(cylCircumference.value) / (parseFloat(2) * parseFloat(PI));
		cylCba.value = parseFloat(PI) * parseFloat(parseFloat(cylRadius.value) **2);
		cylCsa.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value) * parseFloat(cylHeight.value);
		cylTsa.value = parseFloat((parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
		cylHeight.value = parseFloat(cylVolume.value) / parseFloat(cylCba.value);
	}else if(cylCba.value.length > 0 && cylCsa.value.length > 0 && cylPI.value.length > 0) {
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylTsa.value = parseFloat(parseFloat(parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylHeight.value = parseFloat(cylCsa.value) / parseFloat(parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
	}else if(cylTsa.value.length > 0 && cylCba.value.length > 0 && cylPI.value.length > 0) {
		cylCsa.value = parseFloat(cylTsa.value) - parseFloat(parseFloat(cylCba.value) * 2);
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylHeight.value = parseFloat(cylCsa.value) / parseFloat(parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value));
		cylVolume.value = parseFloat(cylCba.value) * parseFloat(cylHeight.value);
	}else if(cylTsa.value.length > 0 && cylCsa.value.length > 0 && cylPI.value.length > 0) {
		cylCba.value = parseFloat((parseFloat(cylTsa.value) - parseFloat(cylCsa.value)) / 2);
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylHeight.value = parseFloat(cylCsa.value) / parseFloat(parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
	}else if(cylRadius.value.length > 0 && cylPI.value.length > 0) {
		cylCba.value = parseFloat(cylPI.value) * parseFloat(parseFloat(cylRadius.value) **2);
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
	}else if(cylCba.value.length > 0 && cylPI.value.length > 0) {
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
	}else if(cylCircumference.value.length > 0 && cylPI.value.length > 0) {
		cylRadius.value = parseFloat(cylCircumference.value) / (parseFloat(2) * parseFloat(PI));
		cylCba.value = parseFloat(PI) * parseFloat(parseFloat(parseFloat(cylRadius.value) **2));
	}else if (cylVolume.value.length > 0 && cylHeight.value.length > 0 && cylPI.value.length > 0) {
		cylCba.value = parseFloat(cylVolume.value) / parseFloat(cylHeight.value);
		cylRadius.value = Math.sqrt(parseFloat(cylCba.value) / parseFloat(cylPI.value));
		cylCsa.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value) * parseFloat(cylHeight.value);
		cylCircumference.value = parseFloat(2) * parseFloat(PI) * parseFloat(cylRadius.value);
		cylTsa.value = parseFloat((parseFloat(cylCba.value) * 2) + parseFloat(cylCsa.value));
		cylVolume.value = parseFloat(PI) * (parseFloat(cylRadius.value) **2) * parseFloat(cylHeight.value);
	}
}

// Function to reset Trapezium Calculator
let resetCylinder = document.querySelector("#reset-cyl");
function resetCylinderCalculator () {
	let cylRadius = document.querySelector("#cyl-radius");
	let cylHeight = document.querySelector("#cyl-height");
	let cylCba = document.querySelector("#cyl-cba");
	let cylCsa = document.querySelector("#cyl-csa");
	let cylTsa = document.querySelector("#cyl-tsa");
	let cylVolume = document.querySelector("#cyl-vol");
	let cylCircumference = document.querySelector("#cyl-circumference");
	cylRadius.value = "";
	cylHeight.value = "";
	cylCba.value = "";
	cylCsa.value = "";
	cylTsa.value = "";
	cylVolume.value = "";
	cylCircumference.value = "";
}

// Event Listeners for Trapezium Calculations
submitCylinder.addEventListener("click", submitCylinderCalculator);
resetCylinder.addEventListener("click", resetCylinderCalculator);

/*CYLINDER cALCULATOR ENDS HERE_-_!!!*/





function baseCalculator () {
	let numberBase = document.querySelector("#number");
	let baseNumber = document.querySelector("#base-number");
	let operator = document.querySelector("#number-base");
	let resultBase = document.querySelector("#result-base");
	let base = [];
	/*Converting from Base 10 to other Bases*/
	function numberBaseFunc (x, y) {
		if(parseInt(x) > 0){
			result = parseInt(x) % parseInt(y);
			base.unshift(parseInt(result));
			x = parseInt(x) / parseInt(y);
			if(parseInt(x) > 0) {
				return numberBaseFunc(x, y);
			}
		}
		return base.reduce((a,b) => a + String(b), "");
	}
	if(numberBase.value.length > 0 && baseNumber.value.length > 0 && operator.value == "base10") {
		resultBase.value = numberBaseFunc(numberBase.value,baseNumber.value);
	}else if(numberBase.value.length > 0 && baseNumber.value.length > 0 && operator.value == "baseX") {
		resultBase.value = parseInt(numberBase.value,baseNumber.value);
	}else if(operator.value == "select operator") {
		alert("Syntax Error");
		resultBase.value = "";
	}else {
		alert("Math Error!");
		resultBase.value = "";
	}
}

// Reset button for basic calculator
function resetBaseCalculator() {
	let numberBase = document.querySelector("#number");
	let baseNumber = document.querySelector("#base-number");
	let operator = document.querySelector("#number-base");
	let resultBase = document.querySelector("#result-base");
	baseNumber.value = "";
	numberBase.value = "";
	resultBase.value = "";
	operator.value = document.querySelector("#option2").value;
}

let submitBase = document.querySelector("#submit-base");
let resetBase = document.querySelector("#reset-base");
/*Event Listeners for Basic Calculator*/
submitBase.addEventListener("click", baseCalculator);
resetBase.addEventListener("click", resetBaseCalculator);
