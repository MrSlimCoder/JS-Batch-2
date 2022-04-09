console.log("Script is working");

// Let, Const, Var (Heap Memory)


// // VAR
// console.log("Var", myVar); // Hoisting
// console.log("Let", myLet);

// var myVar = "Vivek";

// console.log("Var", myVar);

// myVar = "Naresh";

// console.log("Var", myVar);

// // CONST

// const myConst = "Vivek";

// console.log("Const", myConst);

// // myConst = "Naresh";

// // console.log("Const", myConst);

// // LET

// // CONST, LET (Block Scope)

// let myLet = "Vivek";

// console.log("Let", myLet);

// myLet = "Naresh";

// console.log("Let", myLet);


// Dynamic Type Language

// var a = 1;

// console.log(typeof a);

// a = "Hello";

// console.log(typeof a);

// Loops

// for (var i = 0; i < 10; i++) {
//     console.log("Hello World", i);
// }

// const arr = ["Vivek", "Naresh", "Marya"].map((value, index) => {
//     return value + " " + 1;
// })

// console.log(arr);

// Break and Continue

// for (var i = 0; i < 10; i++) {
//     if(i == 5) {
//         continue;
//     }
//     console.log("Hello World", i);
// }

// for (var i = 0; i < 10; i++) {
//     if(i == 5) {
//         break;
//     }
//     console.log("Hello World", i);
// }

// If Else

// const myVar = 9;

// if(myVar === 10) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// Switch
// switch ("Vivek") {
//     case "Vivek":
//         console.log("Hello Vivek");
//         break;
//     case "Naresh":
//         console.log("Hello Naresh");
//         break;
// }

// SET

// const letters = new Set(["a","b","a"]);

// console.log(letters);

// Function

// myFunc(); // Function Hoisting

// function myFunc() {
//     console.log("Hello World")
// }

// Sync/Async

// Sync - Synchronous
// for (var i = 0; i < 1000; i++) {
//     console.log("Hello World", i);
// }
// console.log("End")

// Async - Asynchronous
// setTimeout(() => {
//     for (var i = 0; i < 1000; i++) {
//     console.log("Hello World", i);
// }
// }, 1000);
// console.log("End");

// JSON - JavaScript Object Notation

// const a = new A(); // Object Creation

// a = {
//     name: "Vivek",
//     myMethod: () => {

//     }
// }

// const myJson = {
//     name: "Vivek",
//     myMethod: () => {
//         return "Hello world"
//     }
// }

// console.log(myJson.name);
// console.log(myJson.myMethod());

// Big O Notation - Complexity

// for (var i = 0; i < 1000; i++) {
//     console.log("Hello World", i);
// } // O(n)


// for (var j = 0; j < 1000; j++) {
//     for (var i = 0; i < 1000; i++) {
//         console.log("Hello World", i);
//     }
// } // O(n^2)

// O(1)
// const arr = [1,2,3];
// console.log(arr[1]);