let city = prompt("Enter your city:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

let gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
}

let signal = prompt("Enter traffic signal color:");
if (signal.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signal.toLowerCase() === "green") {
    alert("Move now");
}

let fuel = Number(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

let totalMarks = Number(prompt("Enter total marks:"));
let marks1 = Number(prompt("Enter marks of subject 1:"));
let marks2 = Number(prompt("Enter marks of subject 2:"));
let marks3 = Number(prompt("Enter marks of subject 3:"));

let obtained = marks1 + marks2 + marks3;
let percentage = (obtained / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

alert(
    "Total Marks: " + totalMarks +
    "\nMarks Obtained: " + obtained +
    "\nPercentage: " + percentage.toFixed(2) + "%" +
    "\nGrade: " + grade +
    "\nRemarks: " + remarks
);

let secretNumber = 7;
let guess = Number(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

let number = Number(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}

let evenOdd = Number(prompt("Enter a number:"));
if (evenOdd % 2 === 0) {
    alert("Even Number");
} else {
    alert("Odd Number");
}

let temperature = Number(prompt("Enter temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}

let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");
let num2 = Number(prompt("Enter second number:"));

if (operator === "+") {
    alert(num1 + num2);
} else if (operator === "-") {
    alert(num1 - num2);
} else if (operator === "*") {
    alert(num1 * num2);
} else if (operator === "/") {
    alert(num1 / num2);
} else if (operator === "%") {
    alert(num1 % num2);
}