let date = document.getElementById("date");
let todo_list = document.getElementById("todo-list");

display_date();
auto_update_time();

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

function add_todo(){
    let new_todo = document.getElementById("todo-name");
    if(!new_todo.value) return;
    todo_list.innerHTML += `<div class="todo"><span>${new_todo.value}</span><i class="material-icons">delete</i></div>`;
}