/** Standard Function declaration ****
 * Advantage: Can be declared anywhere in your code and 
 * it will be pareced and ready when needed. */
function var_name(pram1, pram2, ...pram) {
  z = a + b;
  return z;
}

/** function expression ***
 * Can be more concise */

const name = function(pram1, pram2, ...pram) { return z}


/*** Arrow Functions (old),  Fat Arrow Functions ****/

/** Default syntax: 
 *  Same as "normal" functions, parameters and return   statement are optional. Noteworthy: Semi-colon at end, no function keyword, parentheses around parameters/ arguments.*/
const add = (a, b) => {
  const result = a + b;
  return result;
};  


/** Shorter syntax, if only one parameter. Noteworthy: Parentheses around parameter list can be omitted */
const log = message => {
  console.log(message);
  return z;
};  


/** Empty parameter parentheses if no arguments are receive */
const greet = () => {
console.log('Hi there!');
}; 


/** Short function body, if only one expression is used. An expression result is always returned automatically*/
const add = (a, b) => a + b; 


/** THe function can return an object. Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters */
const loadPerson = pName => ({name: pName });  


/** That last case can be confusing: Normally, in JavaScript, curly braces always can have exactly one meaning. */
const person = { name: 'Max' }; // Clearly creates an object
if (something) { ... } // Clearly used to mark the if statement block

/** But when using arrow functions, curly braces can have two meanings:
Mark the function body (in default form)
Create an object which you want to return (in shorter function body form)
To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above. */