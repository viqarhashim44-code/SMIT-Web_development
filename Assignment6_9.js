let number = 10;

alert("Result:");
alert("The value of a is: " + number);

alert("................................");

alert("The value of ++a is: " + (++number));
alert("Now the value of a is: " + number);

alert("The value of a++ is: " + (number++));
alert("Now the value of a is: " + number);

alert("The value of --a is: " + (--number));
alert("Now the value of a is: " + number);

alert("The value of a-- is: " + (number--));
alert("Now the value of a is: " + number);

let a = 2;
let b = 1;

alert("--a = " + (--a));

a = 2;
b = 1;
alert("--a - --b = " + (--a - --b));

a = 2;
b = 1;
alert("--a - --b + ++b = " + (--a - --b + ++b));

a = 2;
b = 1;
let result = --a - --b + ++b + b--;
alert("Result = " + result);

let userName = prompt("Enter your name:");
alert("Welcome " + userName);

let tableNumber = prompt("Enter a number for multiplication table:");
if (tableNumber === "" || tableNumber === null) {
    tableNumber = 5;
}

alert(
    tableNumber + " x 1 = " + tableNumber * 1 + "\n" +
    tableNumber + " x 2 = " + tableNumber * 2 + "\n" +
    tableNumber + " x 3 = " + tableNumber * 3 + "\n" +
    tableNumber + " x 4 = " + tableNumber * 4 + "\n" +
    tableNumber + " x 5 = " + tableNumber * 5 + "\n" +
    tableNumber + " x 6 = " + tableNumber * 6 + "\n" +
    tableNumber + " x 7 = " + tableNumber * 7 + "\n" +
    tableNumber + " x 8 = " + tableNumber * 8 + "\n" +
    tableNumber + " x 9 = " + tableNumber * 9 + "\n" +
    tableNumber + " x 10 = " + tableNumber * 10
);

let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter second subject name:");
let subject3 = prompt("Enter third subject name:");

let totalMarks = 100;

let marks1 = Number(prompt("Enter obtained marks for " + subject1));
let marks2 = Number(prompt("Enter obtained marks for " + subject2));
let marks3 = Number(prompt("Enter obtained marks for " + subject3));

let obtained = marks1 + marks2 + marks3;
let total = totalMarks * 3;
let percentage = (obtained / total) * 100;

alert(
    subject1 + ": " + marks1 + "/" + totalMarks + "\n" +
    subject2 + ": " + marks2 + "/" + totalMarks + "\n" +
    subject3 + ": " + marks3 + "/" + totalMarks + "\n\n" +
    "Total Marks: " + total + "\n" +
    "Obtained Marks: " + obtained + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%"
);