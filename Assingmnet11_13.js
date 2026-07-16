let character = prompt("Enter a single character:");
let code = character.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a number.");
} else if (code >= 65 && code <= 90) {
    alert("It is an uppercase letter.");
} else if (code >= 97 && code <= 122) {
    alert("It is a lowercase letter.");
}

let num1 = Number(prompt("Enter first integer:"));
let num2 = Number(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger.");
} else if (num2 > num1) {
    alert(num2 + " is larger.");
} else {
    alert("Both integers are equal.");
}

let number = Number(prompt("Enter a number:"));

if (number > 0) {
    alert("Positive number");
} else if (number < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}

let letter = prompt("Enter a single character:");

if (
    letter === "a" || letter === "e" || letter === "i" ||
    letter === "o" || letter === "u" ||
    letter === "A" || letter === "E" || letter === "I" ||
    letter === "O" || letter === "U"
) {
    alert(true);
} else {
    alert(false);
}

let correctPassword = "admin123";
let userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);

let time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time");
}