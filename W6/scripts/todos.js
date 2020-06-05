/**Application requirements
 1. Show a list of tasks ****Done****
 2. Add a new task    ****Done****
 3. Complete a task ****Done****
 4. Remove a task    ****Done****
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
const newDesc = document.getElementById('newTodoInput');

let todosArr = [];
let filterArr = [false];

// Launch program
lauchProg(drawTaskList);

function lauchProg(_callback) {
  if (readStor('todos')) { todosArr = readStor('todos')}
  _callback();
}

function keyHandler() {
  if (event.keyCode === 13) {
    newTaskHandler();
  }
}

function newTaskHandler() {
  if (isEmpty(newDesc.value.trim())) {
    alert("You must enter a name or describe your task to add it.");
    return;
  }
  newTodo(newDesc.value, ); 
  writeStor();
  newDesc.value = '';
  drawTaskList();
}

function isEmpty(val) {
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function newTodo(descripton) {
  // const newTodo = new ToDo(descripton, create_UUID());
  const newTodo = new ToDo(descripton);
  todosArr.push(newTodo);
}

function writeStor() {
  if (window.localStorage) {
    localStorage.todos = JSON.stringify(todosArr);
  }
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
  todosArr.filter(todo => {
    return filterArr.includes(todo.Status)}).forEach(
    todo => {
      todoList.innerHTML +=
        `<div class="todo_card">
        <span class="date">${showDate(todo.Created)}</span>
        <span id='s-${todo.Id}' class='${todo.Status?'done':''}'>${todo.Description}</span>
        <input id='c-${todo.Id}' type="checkbox" ${todo.Status?'checked':''} onClick="statusUpdate(${todo.Status}, ${todo.Id})">
        <button id='d-${todo.Id}'><img src="./images/del_icon.png" onClick="deleteObj(${todo.Id})" alt="delete" ></button>
      </div>`;
      ++count;
    });
  totalSel.textContent = count.toString();
  console.log(count);
}

function showDate(dateObj) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]; 
  return dateObj.getDate() + " " + months[dateObj.getMonth()] + ",</br>" + dateObj.getFullYear();
}

function readStor(file) {
  if (window.localStorage) {
    if (localStorage[file]) {
      return JSON.parse(localStorage[file]);       
    } 
  }
}

function filterHandler(filter) {
  switch (filter) {
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

window.statusUpdate = function (objStatus, objId) {
    const currObj = todosArr.find(todo => todo.Id == objId);
    currObj.Status = !objStatus;
    const objDescClass = document.getElementById(`s-${objId}`).classList;
    currObj.Status ? objDescClass.add('done'): objDescClass.remove('done');
    drawTaskList();
}

window.deleteObj = function(objId) {
  debugger
    const newArr = todosArr.filter(todo => todo.Id != objId);    
    todosArr = newArr;
    drawTaskList();
}


newTaskBtn.addEventListener('click', newTaskHandler);
newDesc.addEventListener("keyup", keyHandler);
allTaskBtn.addEventListener('click', filterHandler.bind(this, 'all'));
openTaskBtn.addEventListener('click', filterHandler.bind(this, 'open'));
doneTaskBtn.addEventListener('click', filterHandler.bind(this, 'done'));
