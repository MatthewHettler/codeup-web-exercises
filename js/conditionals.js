"use strict";
// alert("You're connected!");
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var choice = confirm ("Would you like to enter a number?");
//
// if (choice === true) {
//
//     var number = Number(prompt("Please enter a number."));
//
//     if (isNaN(number)) {
//         alert("Error: The entered value is not a number!");
//     } else {
//
//         if (number % 2 === 0) {
//             alert(number + " is an even number.");
//         } else {
//             alert(number + " is an odd number.");
//         }
//
//         alert(number + " + 100 = " + (number + 100));
//
//         if (number > 0) {
//             alert("The number " + number + " is positive.");
//         } else {
//             alert("The number " + number + " is negative.");
//         }
//
//     }
//
// } else {
//     alert("No worries, have a nice day!");
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//
//     if (color === "blue"){
//         return "Blue is the color of the sky";
//     } else if (color === "red") {
//         return "Strawberries are red.";
//     } else if (color === "orange"){
//         return "Oranges are yummy!";
//     } else if (color === "yellow"){
//         return "Bananas are yellow!";
//     } else if (color === "green"){
//         return "The grass is green!";
//     } else if (color === "indigo"){
//         return "Indigo is a nice color.";
//     } else if (color === "violet"){
//         return "Violet is a beautiful color.";
//     } else {
//         return "I don't know anything about that color.";
//     }
//
// }

// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(color){
//     switch (color){
//         case "blue":
//             return "Blue is the color of the sky.";
//         case "red":
//             return "Strawberries are red.";
//         case "orange":
//             return "Oranges are yummy!";
//         case "yellow":
//             return "Bananas are yellow!";
//         case "green":
//             return "The grass is green!";
//         case "indigo":
//             return "Indigo is a nice color.";
//         case "violet":
//             return "Violet is a beautiful color.";
//         default:
//             return "I don't know anything about that color.";
//     }
// }

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(){
//
//     var colorPrompt = prompt("What is your favorite color?");
//
//     if (colorPrompt === "blue"){
//         alert("Blue is the color of the sky");
//     } else if (colorPrompt === "red") {
//         alert("Strawberries are red.");
//     } else if (colorPrompt === "orange"){
//         alert("Oranges are yummy!");
//     } else if (colorPrompt === "yellow"){
//         alert("Bananas are yellow!");
//     } else if (colorPrompt === "green"){
//         alert("The grass is green!");
//     } else if (colorPrompt === "indigo"){
//         alert("Indigo is a nice color.");
//     } else if (colorPrompt === "violet"){
//         alert("Violet is a beautiful color.");
//     } else {
//         alert("I don't know anything about that color.");
//     }
//
// }
//
// console.log(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount){
//
//     if (luckyNumber === 0){
//         alert("Sorry, you receive no discount.")
//     } else if (luckyNumber === 1) {
//         return ("Congratulations! You've saved $" + (totalAmount * .10) + " today, which is 10% off of your purchase!");
//     } else if (luckyNumber === 2){
//         return ("Congratulations! You've saved $" + (totalAmount * .25) + " today, which is 25% off of your purchase!");
//     } else if (luckyNumber === 3){
//         return ("Congratulations! You've saved $" + (totalAmount * .35) + " today, which is 35% off of your purchase!");
//     } else if (luckyNumber === 4){
//         return ("Congratulations! You've saved $" + (totalAmount * .50) + " today, which is 50% off of your purchase!");
//     } else if (luckyNumber === 5){
//         alert("You're a winner! Your purchase is free!")
//     }
//
// }

// console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
alert("Let's see if you've won a discount on today's purchase!");
var totalAmount = Number(prompt("What was your total bill?"));

function calculateTotal(){

    if (luckyNumber === 0){
        alert("Sorry, you receive no discount because you didn't roll a lucky number. Try again!")
    } else if (luckyNumber === 1) {
        alert("Congratulations! Your lucky number is 1!");
        alert("Your price before discount is $" + totalAmount + ".");
        alert("Your price after discount is $" + (totalAmount * .10) + "!");
    } else if (luckyNumber === 2){
        alert("Congratulations! Your lucky number is 2!");
        alert("Your price before discount is $" + totalAmount + ".");
        alert("Your price after discount is $" + (totalAmount * .25) + "!");
    } else if (luckyNumber === 3){
        alert("Congratulations! Your luck number is 3!");
        alert("Your price before discount is $" + totalAmount + ".");
        alert("Your price after discount is $" + (totalAmount * .35) + "!");
    } else if (luckyNumber === 4){
        alert("Congratulations! Your luck number is 4!");
        alert("Your price before discount is $" + totalAmount + ".");
        alert("Your price after discount is $" + (totalAmount * .50) + "!");
    } else if (luckyNumber === 5){
        alert("You're a winner! Your purchase is free!")
    }
}

console.log(calculateTotal(luckyNumber));






