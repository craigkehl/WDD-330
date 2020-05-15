import { Student } from './student.js';

let student1 = new Student('McKienna', 'Kehl', '111-111-11111');

document.querySelector('button').addEventListener('click', addStudent);

let students = [];

if (localStorage.getItem('studnents')) {
    students = JSON.parse(localStorage.getItem('students'));

    loadTable();
}

// Create
function addStudent(event) {
    let student = new Student(
      document.getElementById('firstName').value,
      document.getElementById('lastName').value,
      document.getElementById('iNumber').value
    );

    students.push(student);

    localStorage.setItem('students', JSON.stringify(students));

    loadTable();

    document.forms['studentInput'].reset();
    document.querySelector('#firstName').focus();
    
    event.preventDefault();
}

function loadTable() {
  document.querySelector('tbody').innerHTML = "";

  students.forEach(
    student => {
    document.querySelector('tbody').innerHTML +=
    `<tr>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.iNumber}</td>
    </tr>`;
  }
)};