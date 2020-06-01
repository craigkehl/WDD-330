/**Application requirements
 1. Show a list of tasks ****Done****
 2. Add a new task    ****Done****
 3. Complete a task
 4. Remove a task
 5. Filter tasks (complete/incomplete)   ****Done****
 6. Store Data sources: localStorage   ****Done****
 7. Create a todo class - todo: { id : timestamp, content: string, completed: bool }  ****Done****
 8. Create an a list to contain instances - toDoList = [toDo];   ****Done****
*/

import { ToDo } from "./todo.js";

const newTaskBtn = document.getElementById("add-task-btn");
const allTaskBtn = document.getElementById("selAll");
const openTaskBtn = document.getElementById('selOpen');
const doneTaskBtn = document.getElementById('selDone');
const todoList = document.getElementById('todo-list');

let todosArr =  [];
let filterArr = [false];
readStor();

function newTaskHandler() {
  const newDesc = document.getElementById('newTodoInput');
  if (isEmpty(newDesc.value.trim())) {
    alert("You must enter a name or describe your task to add it."); 
    return;
  }
  newTodo(newDesc.value, );
  writeStor();
  newDesc.value = '';
  drawTaskList();
}

function newTodo( descripton ) {
  const newTodo = new ToDo(descripton, create_UUID());
  todosArr.push(newTodo);
}

function isEmpty(val){
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function drawTaskList() {
  const todoSection = document.getElementById('todo-section');
  let totalSel = document.getElementById('numTodos');
  let count = 0;
  
  if (todosArr.length === 0) {
    todoSection.classList.remove('visible');
    return;
  } else {
    todoSection.classList.add('visible');
  }
  todoList.innerHTML = ''; //clear old list
  
  // construct a current list
  todosArr.filter(todo=>{
    return filterArr.includes(todo.Status)
  }).forEach(
    todo => {        
      todoList.innerHTML += 
        `<div class="todo_card">
          <span>${showDate(todo.Id)}</span>
          <span>${todo.Description}</span>
          <input id='c-${count}' type="checkbox" value=${todo.Status}">
          <button id='d-${count}'><img src="./images/del_icon.png" alt="delete"></button>
        </div>`;
      ++count;  
  });  
  totalSel.textContent = count.toString();
  console.log(count);
}

function showDate(timestamp) { 
  const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return timestamp.getDate() + " " + months[timestamp.getMonth()] + ",</br>" + timestamp.getFullYear();
}

/** Get local storage working */
function writeStor(){
  if (window.localStorage) {
    localStorage.todos = JSON.stringify(todosArr);
  }
}

function readStor(){
  if (window.localStorage) {
    if ("todos" in localStorage) {
      const buildArr = JSON.parse(localStorage.todos);
      buildArr.forEach(todo => newTodo(todo));
      drawTaskList();
    }
  }
}

function filterHandler(filter) {
  switch(filter) {
    case 'all':
      filterArr = [true, false];
      break;
    case 'done':
      filterArr = [true];
      break;
    case 'open':
      filterArr = [false];
      break;
    default:
      filterArr = [false];
  }
  drawTaskList();
  console.log(filterArr);
  return filterArr;
}

function statusChange(objIndex) {
  todosArr[objIndex].status = !todosArr[objIndex].status;
}

function delTodo(index) {
  if (index > -1) {
    array.splice(index, 1);
    drawTaskList();
  }
}

function editTodoHandler(e) {
  console.log(e.target.Id);
  if (e.target.Id.charAt(0)=='c') {
    let index = e.target.Id.substr(2);
    statusChange(index);
  } else if  (e.target.Id.charAt(0)=='d') {
      let index = e.target.Id.substr(2);
      delTodo(index);
  }
}


function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

newTaskBtn.addEventListener('click', newTaskHandler);
allTaskBtn.addEventListener('click', filterHandler.bind(this, 'all'));
openTaskBtn.addEventListener('click', filterHandler.bind(this, 'open'));
doneTaskBtn.addEventListener('click', filterHandler.bind(this, 'done'));
todoList.addEventListener('click', editTodoHandler);

