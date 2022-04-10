console.log("Script is working");

// Memory Heap (Variable Hoisting)
console.log(myVar);
var myVar = "vivek";
console.log(myVar);

// Query (FIFO) vs Stack (LIFO)

// Call Stack (Functions Hoisting)
myFunc();
function myFunc() {
    console.log("My Function")
}

// Web APIS

// Async 

// console.log("Before");
// setTimeout(() => {
//     console.log("SetTimeOut() Executed");
// }, 1000);
// console.log("After");


console.log("Before");
setTimeout(() => {
    console.log("SetTimeOut() Executed");
}, 0);
console.log("After");