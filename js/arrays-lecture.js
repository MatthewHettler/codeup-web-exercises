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

pets[pets.length] = "Lily";
console.log(pets[pets.length-1]);

//=== For Each Loop For Array ===//
pets.forEach(function (pet, i, arr) {
    console.log(pet);
});