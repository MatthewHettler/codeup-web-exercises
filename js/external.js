"use strict";

// TODO: Add a console.log message in external.js that says "Hello from external JavaScript".

// console.log("Hello from external JavaScript.");

// TODO: Use the alert function to show a message that says 'Welcome to my Website!'.

// alert("Welcome to my website!");

// TODO: Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

// var userInput = prompt("What's your favorite color?");
// alert("Great, " + userInput + " is my favorite color too!");
// console.log("The user's favorite color is " + userInput + ".");

// TODO: Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console. When the exercise asks you to use a number, instead use a prompt to ask the user for that number. Use an alert to show the results of each problem.

// TODO: Part 1: You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

//------------------------MY ANSWER---------------------------//

// MOVIE 1

// var littleMermaidRentPeriod = prompt("How many days will you be renting the Little Mermaid?");
// var littleMermaidRentCost = littleMermaidRentPeriod*3;
// alert("The total for renting this movie for " + littleMermaidRentPeriod + " day(s) is $" + littleMermaidRentCost + ", since we charge $3 per day.");
// console.log("The renter will pay $" + littleMermaidRentCost + " to rent the Little Mermaid.");

// MOVIE 2

// var brotherBearRentPeriod = prompt("How many days will you be renting Brother Bear?");
// var brotherBearRentCost = brotherBearRentPeriod*3;
// alert("The total for renting this movie for " + brotherBearRentPeriod + " day(s) is $" + brotherBearRentCost + ", since we charge $3 per day.");
// console.log("The renter will pay $" + brotherBearRentCost + " to rent Brother Bear.");

// MOVIE 3

// var herculesRentPeriod = prompt("How many days will you be renting Brother Bear?");
// var herculesRentCost = herculesRentPeriod*3;
// alert("The total for renting this movie for " + herculesRentPeriod + " day(s) is $" + herculesRentCost + ", since we charge $3 per day.");
// console.log("The renter will pay $" + herculesRentCost + " to rent Hercules.");

//--------------------DYNAMIC VERSION---------------------//

// 1. ask user what the rental fee is --> prompt & variable
// 2. ask user how many days little mermaid --> prompt & variable
// 3. ask user how many days brother bear --> prompt & variable
// 4. ask user how many days hercules --> prompt & variable
// 5. calculate the total price * number of days
// 6. alert the total price

// var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
// // another way is using parseInt instead of 'Number'
//
// var mermaidDaysRented = Number(prompt("How many days are you renting the Little Mermaid?"));
//
// var brotherBearDaysRented = Number(prompt("How many days are you renting Brother Bear?"));
//
// var herculesDaysRented = Number(prompt("How many days are you renting Hercules?"));
//
// var totalCost = (mermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRate;
//
// var alertMessage = "You owe $" + totalCost;
//
// alert(alertMessage);



// TODO: Part 2: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

//------------------------MY ANSWER---------------------------//

// alert("Let's find out how much you'll make for the week!");
//
// var googleHourlyWage = 400;
// var amazonHourlyWage = 380;
// var facebookHourlyWage = 350;
//
// var googleInput = prompt("Please enter how many hours you've worked this week for Google.");
// var amazonInput = prompt("Please enter how many hours you've worked this week for Amazon.");
// var facebookInput = prompt("Please enter how many hours you've worked this week for Facebook.");
// var weeklyTotal = (googleInput*googleHourlyWage) + (amazonInput*amazonHourlyWage) + (facebookInput*facebookHourlyWage);
//
// alert("You'll make a total of $" + weeklyTotal + " this week!" );
//
// console.log("The total amount of money earned for the week is $" + weeklyTotal + "!");

//--------------------DYNAMIC VERSION---------------------//

// var googleRate = Number(prompt("What is your google rate?"));
// var amazonRate = Number(prompt("What is your amazon rate?"));
// var facebookRate = Number(prompt("What is your facebook rate?"));
//
// var googleHours = Number(prompt("How many hours did you work at google?"));
// var amazonHours = Number(prompt("How many hours did you work at amazon?"));
// var facebookHours = Number(prompt("How many hours did you work at facebook?"));
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
//
// var alertMessage = "Your total pay is $" + totalPay;
// alert(alertMessage);




// TODO: Part 3: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

//------------------------MY ANSWER---------------------------//

// alert("Let's see if you can register...");
//
// var classAt8AM = confirm("Is the class at 8AM?");
//
// var classSize = prompt("What is the total capacity of the class?");
//
// var currClassSize = prompt("What is the current class size?");
//
// var canRegister = (currClassSize < classSize) && classAt8AM === false;
//
// var unableToRegister = (currClassSize >= classSize) || classAt8AM === true;
//
// function registration(){
//
//     if (canRegister) {
//         return "You can register!";
//     } else if (unableToRegister) {
//         return "You can't register!";
//     } else {
//         return "Error occurred."
//     }
// }
//
// alert(registration());

//--------------------DYNAMIC VERSION---------------------//

// var classIsNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("Schedules don't conflict");
//
// console.log("class not full: " + classIsNotFull);
// console.log("no schedule conflicts: " + noScheduleConflicts);
//
// var studentEnrolled = classIsNotFull && noScheduleConflicts;
// console.log(studentEnrolled);
//
// alert("Student can enroll: " + studentEnrolled);


// TODO: Part 4: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//------------------------MY ANSWER---------------------------//

// var krogerCard = confirm("Do you have a Kroger Card?");
//
// var cartSize = prompt("How many items are in your cart?");
//
// var offerValid = confirm("Has the promo offer expired?");
//
// var canHasDiscount = offerValid === false && (cartSize > 2 || krogerCard);
//
// var cannotHasDiscount = offerValid === true && (cartSize <= 2 || krogerCard === false);
//
// function alertStatement() {
//     if (canHasDiscount) {
//         return "You're eligible for the discount!"
//     } else if (cannotHasDiscount) {
//         return "Sorry, you're not eligible for the discount."
//     } else {
//         return "An error occurred."
//     }
// }
//
// alert(alertStatement());

//--------------------DYNAMIC VERSION---------------------//

// var numberOfItems = Number(prompt("How many items for checkout?")); // number
// var offerValid = confirm("Is the offer valid"); // boolean
// var isPremiumMember = confirm("Are you a premium member?"); // boolean
//
// var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);
//
// alert("Can use discount: " + discountApplied);

