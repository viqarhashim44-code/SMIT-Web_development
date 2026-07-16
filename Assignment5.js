let num1 = 10;
let num2 = 5;

alert("Addition: " + (num1 + num2));
alert("Subtraction: " + (num1 - num2));
alert("Multiplication: " + (num1 * num2));
alert("Division: " + (num1 / num2));
alert("Modulus: " + (num1 % num2));

let number;
alert("Value after variable declaration is: " + number);

number = 5;
alert("Initial value: " + number);

number++;
alert("Value after increment is: " + number);

number += 7;
alert("Value after addition is: " + number);

number--;
alert("Value after decrement is: " + number);

alert("The remainder is: " + (number % 3));

let ticketPrice = 600;
let totalTicketCost = ticketPrice * 5;
alert("Total cost to buy 5 tickets is " + totalTicketCost + " PKR");

let table = 4;
alert(
    table + " x 1 = " + (table * 1) + "\n" +
    table + " x 2 = " + (table * 2) + "\n" +
    table + " x 3 = " + (table * 3) + "\n" +
    table + " x 4 = " + (table * 4) + "\n" +
    table + " x 5 = " + (table * 5) + "\n" +
    table + " x 6 = " + (table * 6) + "\n" +
    table + " x 7 = " + (table * 7) + "\n" +
    table + " x 8 = " + (table * 8) + "\n" +
    table + " x 9 = " + (table * 9) + "\n" +
    table + " x 10 = " + (table * 10)
);

let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
alert(celsius + "°C is " + fahrenheit + "°F");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
alert(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");

let item1 = 650;
let item2 = 100;
let quantity1 = 3;
let quantity2 = 7;
let shipping = 100;

let totalCost = item1 * quantity1 + item2 * quantity2 + shipping;

alert(
    "Price of item 1: " + item1 +
    "\nPrice of item 2: " + item2 +
    "\nQuantity of item 1: " + quantity1 +
    "\nQuantity of item 2: " + quantity2 +
    "\nShipping Charges: " + shipping +
    "\nTotal Cost: " + totalCost
);

let totalMarks = 980;
let obtainedMarks = 804;
let percentage = (obtainedMarks / totalMarks) * 100;
alert("Percentage: " + percentage.toFixed(2) + "%");

let pkr = (10 * 104.80) + (25 * 28);
alert("Total Currency in PKR: " + pkr);

let value = 10;
let result = ((value + 5) * 10) / 2;
alert("Result: " + result);

let currentYear = 2025;
let birthYear = 2005;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
alert("They are either " + age2 + " or " + age1 + " years old");

let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
alert("Circumference: " + circumference);
alert("Area: " + area);

let snack = "Chips";
let currentAge = 20;
let maxAge = 80;
let amountPerDay = 2;
let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

alert("Favorite Snack: " + snack);
alert("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);