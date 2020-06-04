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

import {
  ToDo
} from "./todo.js";

const newTaskBtn = document.getElementById("add-task-btn");
const allTaskBtn = document.getElementById("selAll");
const openTaskBtn = document.getElementById('selOpen');
const doneTaskBtn = document.getElementById('selDone');
const todoList = document.getElementById('todo-list');

let todosArr = [];
let filterArr = [false];
readStor();

function newTaskHandler() {
  const newDesc = document.getElementById('newTodoInput');
  if (isEmpty(newDesc.value.trim())) {
    alert("You must enter a name or describe your task to add it.");
    return;
  }
  newTodo(newDesc.value, ); // Question - Do I need another comma for the date created?
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

/** Get local storage working */
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
    return filterArr.includes(todo.Status)
  }).forEach(
    todo => {
      todoList.innerHTML +=
        `<div class="todo_card">
        <span>${showDate(todo.Created)}</span>
        <span>${todo.Description}</span>
        <input id='c-${todo.Id}' type="checkbox" value="${todo.Status}">
        <button id='d-${todo.Id}'><img src="./images/del_icon.png" alt="delete" ></button>
      </div>`;
      ++count;
    });
  totalSel.textContent = count.toString();
  console.log(count);
}

function showDate(timestamp) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return timestamp.getDate() + " " + months[timestamp.getMonth()] + ",</br>" + timestamp.getFullYear();
}

function readStor() {
  if (window.localStorage) {
    if (localStorage.todos) {
      todosArr = JSON.parse(localStorage.todos);
      drawTaskList();
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

function statusChange(objId) {
  console.log(objId);
  // obj.Status = true;
  // writeStor();
  // drawTaskList();
}

function delTodo(objId) {
  console.log(objId);
  //   if (objId > -1) {
  //     array.splice(objId, 1);
  //     drawTaskList();
  //   }
}

function parseTodoHandler(e) {
  const btnId = e.target.parentNode.id;
  const checkId = e.target.id;
  if (checkId && checkId.charAt(0) == 'c') {   
    statusChange(checkId.substr(2, checkId.length - 2));
  } else if (btnId && btnId.charAt(0) == 'd') {
    delTodo(btnId.substr(2, btnId.length - 2));
  }
}


newTaskBtn.addEventListener('click', newTaskHandler);
allTaskBtn.addEventListener('click', filterHandler.bind(this, 'all'));
openTaskBtn.addEventListener('click', filterHandler.bind(this, 'open'));
doneTaskBtn.addEventListener('click', filterHandler.bind(this, 'done'));
todoList.addEventListener('click', parseTodoHandler);
