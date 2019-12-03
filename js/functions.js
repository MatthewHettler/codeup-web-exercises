"use strict";

/**
 * TODO: Create a function called 'sayHello' that takes a parameter 'name'. When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}

// console.log(sayHello("Matthew"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Call the function 'sayHello' and pass your name as a string literal argument. Store the result of the function call in a variable named 'helloMessage'. console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Matthew");

// console.log(helloMessage);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Store your name as a string in a variable named 'myName', and pass that variable to the 'sayHello' function. You should see the same output in the console.
 */

var myName = "Matthew";

// console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Create a function called 'isTwo' that takes a number as a parameter. The function should return a boolean value based on whether or not the passed number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * TODO: Call the function 'isTwo' passing the variable 'random' as a argument. console.log *outside of the function* to check your work (you should see a different result every time you refresh the page if you are using the random number.
 */

function isTwo (x) {
    if (x === 2) {
        return true;
    } else {
        return false;
    }
}

//----walk-through example----//

var isTwo = function(num) {
    return num === 2;
};

//--------------------------//

// console.log(isTwo(1));
// console.log(isTwo(2));
// console.log(isTwo(3));
// console.log(isTwo(random));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a restaurant. The function should accept a tip percentage and the total of the bill, and return the amount to tip.
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// var tipPercentage = Number(prompt("How much is your tip percentage?"));
//
// var totalOfBill = Number(prompt("How much was the bill?"));
//
// function calculateTip() {
//     return tipPercentage * totalOfBill;
// }

// console.log("The total amount to tip is: $" + calculateTip());

//----walk-through example----//

// var calculateTip = function (tipPercent, billTotal) {
//     return tipPercent * billTotal;
// };
//
// console.log(calculateTip(.20, 20)); // returns 4
// console.log(calculateTip(.25, 25.50)); // return 6.375
// console.log(calculateTip(.15, 33.42)); // returns 5.013

//--------------------------//

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Use prompt and alert in combination with your calculateTip function to prompt the user for the bill total and a percentage they would like to tip, then display the dollar amount they should tip.
 */

// var billTotal = Number(prompt("What was the bill total?"));
// var percentageOfBill = Number(prompt("What is the percentage you'd like to tip?"));
//
// function calculateTip(){
//     return billTotal * percentageOfBill;
// }
//
// alert("This is how much you should tip: $" + calculateTip());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * TODO: Create a function named `applyDiscount`. This function should accept a price (before a discount is applied), and a discount percentage (a number between 0 and 1). It should return the result of applying the discount to the original price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// var originalPrice = Number(prompt("How much is the item's original price?"));
// var discountPercent = Number(prompt("What is the discount percentage?"));
//
// function applyDiscount(){
//     return originalPrice * discountPercent;
// }
//
// alert("This is the price after the discount is applied: $" + applyDiscount());

//----walk-through example----//

var applyDiscount = function (price, discountPercentage) {
    var discountAmount = price * discountPercentage;
    return price - discountAmount;
};
var originalPrice = 100;
var discountPercent = .2; // 20%
// console.log(applyDiscount(originalPrice, discountPercent)); // 80
// console.log(applyDiscount(45.99, 0.12)); // 40.4712

//--------------------------//


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
