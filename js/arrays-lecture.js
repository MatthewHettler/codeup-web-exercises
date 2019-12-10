"use strict";

var pets = [];
pets[0] = "Toby";
pets[1]  = "Princess";
pets[2] = "Samson";
pets[3] = "Jill";
pets[4] = "Bubbles";
pets[5] = "Malu";

//=== Another way to build an array ===//

var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malue", "Lily"];

// calling the array
// console.log(pets);


//=== Array Example ===//

var favoriteNumbers = [42, 77, 22, 17, 3.141592, 74, 100000000, 12];

// console.log(favoriteNumbers);

//=== For Loop For Pets Array ===//

// for (var i = 0; i<pets.length; i++){
//     console.log(pets[i]);
// }

// i = log
// 0 = Toby
// 1 = Princess
// 2 = Samson
// 3 = Jill
// 4 = Bubbles
// 5 = Malue
// 6 = Lily

// pets[pets.length] = "Lily";
// console.log(pets[pets.length-1]);
//
// //=== For Each Loop For Array ===//
// pets.forEach(function (pet, i, arr) {
//     console.log(pet);
// });

var fruit = ["apple", "orange", "banana"];
// // fruit[fruit.length] = "pear";
// console.log(fruit);
// alert("Hello");
// console.log(fruit.push("pear","pineapple","grape","mango"));
// // fruit.push("pineapple");
// // fruit.push("grape");
// // fruit.push("mango");
// console.log(fruit.shift());
// console.log(fruit.unshift("strawberry"));
// console.log(fruit.indexOf("pineapple"));
// console.log(fruit[4]);
// // console.log(fruit.pop());
// // console.log(fruit);
//
// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// var words = sentence.split(" ");
// for (var i = 0;i<words.length; i++) {
//     // capitalize first letter
//     var word = words[i];
//     // var firstLetter = word.split()[0];
//     var letters = word.split();
//     var capitalFirstLetter = letters[0].toUpperCase();
//     var capitalizedWord = "";
//     capitalizedWord += capitalFirstLetter;
//     for (var j=1;j<letters.length;j++) {
//         capitalizedWord += letters[j];
//     }
//     words[i] = capitalizedWord;
//
// }
// words.reverse();
// sentence = words.join(" ");
// console.log(sentence);


var fruits1thru3 = fruit.slice(0,3);
var fruits6thru8 = fruit.slice(5,8);
console.log(fruits6thru8);
console.log(fruit);


