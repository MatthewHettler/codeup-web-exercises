"use strict";

// alert("Connected");

// var numberToApply = parseFloat(prompt("Enter a number:"));
// function showMultiplicationTable (num) {
//     var functionString = '';
//     for (var i = 0; i <= 10; i++ ) {
//         functionString += (num + " x " + i + " = " + (num * i) + "\n");
//     }
//     return functionString;
// }

// console.log(showMultiplicationTable(numberToApply));

//========= Walk-through Solution =========//

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// function showMultiplicationTable(numberInput){
//     for (var i = 1; i <= 10; i++){
//         var answer = numberInput * i;
//         console.log(numberInput + " x " + i + " = " + answer);
//     }
// }
//
// showMultiplicationTable(7);

//========= Walk-through Solution =========//

// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// for (var i = 1; i <= 10; i++){
//     var randomNumber = Math.floor(Math.random() * 180) + 20;
//
//     if (randomNumber % 2 === 0){
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd");
//     }
// }

//========= Walk-through Solution =========//

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i < 10; i++){
//     console.log(i.toString().repeat(i));
// }

//=== or ===//

// for (var outer = 1; outer <= 9; outer++){
//     var output = '';
//     for (var inner = 1; inner <= outer; inner++){
//         output += outer;
//     }
//     console.log(output);
// }

//========= Walk-through Solution =========//

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (var i = 100; i >= 5; i-=5){
//     console.log(i);
// }

