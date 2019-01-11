// // Basics
// // alert("Yeet");
// var firstValue = -90;
// var secondValue = [100.4, true, "yes"];
// console.log(firstValue, secondValue, firstValue + secondValue[0]);


// var myString = "Hello ";
// console.log(myString, "Jack");
// console.log(myString.length);

// var myNumber3 = 90;
// myNumber3 = myNumber3 + 1;
// console.log(myNumber3 + 1);
// console.log(myNumber3);

// var newString = "Hello m' sister!";
// console.log(newString);
// console.log(newString.search("e"));

// var myMoney = 2;
// var housePrice = 2.4e6;

// if (myMoney > housePrice) {
//     console.log("get a burrito");
// } else if (myMoney === 0) {
//     console.log(" get a burrito")
// } else if (myMoney < housePrice) {
//     console.log("get a burrito")
// }

// Integer
var int1 = 1;
var int2 = 2;

//Float
var float1 = 2.3;
var float2 = 12.232;

// String
var str1 = "This is string1";
var str2 = 'This is string2';
var str3 = `This is string3`;

var conCat = str1 + "Yeet";
console.log(conCat);

var interpolated = `String 3: ${str3}`;
console.log(typeof interpolated);

// Boolean
var bool1 = true;
var bool2 = 1;
var bool3 = false;
var bool4 = 0;

// False
// ""
// 0
// undefined
// false
// null
// NaN

// Truthy
// Everything else
// 1 or -1
// true
// "string"
// []
// {}

var answer = prompt("What is your name?");
if(answer === "Yeet") { 
    prompt("Try again you spanner")
} else if (answer) {
    console.log(`Welcome, ${answer}`)
} else {
    prompt("Please don't ignore me.")
} 
