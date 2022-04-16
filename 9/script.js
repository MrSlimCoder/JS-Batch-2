// CRUD - CREATE, READ, UPDATE, DELETE
let todos = [];

function createTodo() {
    const value = document.getElementById("todo").value;
    if (value !== "" || value !== null || value !== undefined) {
        todos.push(value);
        // Set LocalStorage
        document.getElementById("myTodos").innerHTML = "";
        readTodo();
        document.getElementById("todo").value = "";
    }
}

function readTodo() {
    // Get localStorage
    todos.forEach((value, index) => {
        document.getElementById("myTodos").innerHTML += `<br/> <li id=${index} style="display:inline-block">${value}</li> <button onclick=deleteTodo(${index})>X</button> <br/>`;
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    // Delete localStorage
    document.getElementById("myTodos").innerHTML = "";
    todos.forEach((value, index) => {
        document.getElementById("myTodos").innerHTML += `<br/> <li id=${index} style="display:inline-block">${value}</li> <button onclick=deleteTodo(${index})>X</button> <br/>`;
    });
}