let date = document.getElementById("date");
let todo_list = document.getElementById("todo-list");

display_date();
auto_update_time();
load_todos();

function display_date(){
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    day = add_zero(day);
    month = add_zero(month);
    date.innerHTML = day + "." + month + "." + year;
}

function add_zero(number){
    if(number < 10) number = "0" + number;
    return number;
}

function auto_update_time(){
    setInterval(function(){
        display_date();
    }, 1000);
}

function new_todo(){
    let new_todo_name = document.getElementById("todo-name").value;
    if(!new_todo_name) return;  //if todo is empty skip
    todo_list.innerHTML += display_todo(new_todo_name);
    upload_todo(new_todo_name);
}

function upload_todo(todo){
    let todos = localStorage.getItem("todos");
    if(todos){
        todos = JSON.parse(todos).todos;
    } else {
        todos = [];
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify({todos: todos}));
    console.log(localStorage.getItem("todos"));
}

function load_todos(){
    let todos = localStorage.getItem("todos");
    if(!todos) return;
    todos = JSON.parse(todos).todos;
    todos.forEach(element => {
        todo_list.innerHTML += display_todo(element);
    });
}

function display_todo(element){   //template for todo display
    return `<div class="todo"><span>${element}</span><i class="material-icons">delete</i></div>`;
}