// console.log("Hello World!");


// // Functions 
// function myFunction() {
//    document.getElementById("heading").innerHTML = "My World";
// }

// function submitName() {
//     const value = document.getElementById("name").value; 
//     document.getElementById("showName").innerHTML = value;
// }

// // Variables

// var myName = "Vivek";
// var myAge = 25;

// function showMyName() {
//     document.getElementById("showMyName").innerHTML = myName;
// }

// // Constants (const) 
// const DummyName = "Vivek";


// Arrays 
const arr = [1,"abc",3,4,5];

// TODO LIST

function submitTodo() {
    const value = document.getElementById("myTodo").value;
    if (value !== "") {
        const div = document.getElementById("todoList");
        div.innerHTML = div.innerHTML + `<p>${value}</p>`;
    }
}

