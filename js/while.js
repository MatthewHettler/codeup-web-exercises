"use strict";

// alert("connected");

// var i = 2;
// while (i <= 65536){
//     console.log(i);
//     i*=2;
// }

//========= Walk-through Solution =========//

// var x = 2;
//
// while(x <= 65536){
//     console.log(x);
//     x*=2;
// }

//===========================================================//

// var allCones = Math.floor(Math.random() * 50) + 50;
// var randomNumberSold = Math.floor(Math.random() * 5) + 1;

// do {
//     console.log(allCones - randomNumberSold);
//     randomNumberSold++;
// } while (allCones > 0);

//========= Walk-through Solution =========//

// 1. Generate total amount of cones - happens one time --> allCones

// 2. Customer wants to buy x amount of cones --> conesPurchased

// 3. We need to check to see if we have that amount of cones available

// 4. If not (sad path) --> sorryMessage

// 5. If we do have enough cones (happy path) --> happyConesMessage

// 6. Subtract the amount of cones sold from allCones

// 7. Repeat until I don't have any cones left --> allCones > 0

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     // This is how many cones are purchased by each customer
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//     if(conesPurchased > allCones){
//         // sad path - i cant sell you cones because i don't have enough
//         var sadConesMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + "..."
//         console.log(sadConesMessage);
//     } else {
//         //happy path - I can sell you cones! because I have enough
//         allCones -= conesPurchased;
//
//         var happyConesMessage = conesPurchased + " cones sold ... " + allCones + " cones to go";
//         console.log(happyConesMessage);
//     }
// } while(allCones > 0);
//
// console.log("Yay I sold all the cones!");