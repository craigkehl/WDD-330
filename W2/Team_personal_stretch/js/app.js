/********* Part 1  ****************/
/** Dom Elements */
// const usrInput = document.getElementById('number_input');
// const btnInput = document.getElementById('btn');
// const output = document.getElementById('output');

// /** Functions */
// const getNumberInput = () => { return usrInput.value};

// const procInOut = () => {
//   output.innerHTML = getNumberInput();
//   console.log(getNumberInput());
//   console.log(output.textContent);
// } 

/** main code */

// console.log('Get Started');
// btnInput.addEventListener('click', procInOut);



/********** Stretch ***********/
/** Retrieve DOM elements */
const btnAdd = document.getElementById('btnAdd2');
const btnSub = document.getElementById('btnSub');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');
const output = document.getElementById('output');

function showOutput(message) {  //Standard function declaration
  output.textContent = message;
}

const validate = function (testNum) {  //expression declaration
  (isNaN(testNum)) ? alert("Input must be numeric"):
    testNum;
    return testNum;
}

const calculate = (op) => {  // Fat Arrow Function
  const n1El = parseInt(document.getElementById('num1_input').value);
  const n2El = parseInt(document.getElementById('num2_input').value);
  const num1 = validate(n1El);
  const num2 = validate(n2El);  
    switch (op) {
      case "+":
        results = num1 + num2;
        break;
      case "-":
        results = num1 - num2;
        break;
      case "*":
        results = num1 * num2;
        break;
      case "/":
        results = num1 / num2;
        break;
      default:
        break;
    } 
  showOutput(results);
};

/** Event listners with callback() and .bind() */
btnAdd.addEventListener('click', calculate.bind(this, '+'));
btnSub.addEventListener('click', calculate.bind(this, '-'));
btnMult.addEventListener('click', calculate.bind(this, '*'));
btnDiv.addEventListener('click', calculate.bind(this, '/'));
