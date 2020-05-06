// Ways to create arrays
// Most standard way of creating an array and populating it in the same statement

const arr = [1, 2, 3, 4]; //Passing in more than one number separated by commas populates the array with those numbers


// The following three ways create empty arrays of length 1. Passing in a single number defines the length but does not populate the array.

const arr1 = [1];  // Assumed calling the contructor

const arr2 = Array(1);  // new keyword can be ommitted

const arr3 = new Array(1);  // Properly calls the constructor method with the parameter designating the length.


// However, Javascript assumes you are populating and constructing an array if you provide comma separated values
const arr2a = Array(2, 4, 6);  // There is a performance hit compared to [] notation.

// Because a string is being passed, an array populated with that string is created. Very forgiving.
const arr4 = ['Hi'];
const arr5 = Array('Hi');
const arr6 = new Array ('Hi');

//Array.of() calls the Array constructor of (items,). So, both a single number or any item creates an array and populates it with the items listed.
const arr7 = Array.of(1);
const arr8 = Array.of('Hi');

// Special method to take an "Array-Like" object and converts it to an array.
const arr9 = Array.from('Hi');  // The string becomes ["H", "i", "!"]
const arr10 = Array.from(1);



/**  What can an Array Hold?
 * A collection of data types
 * A collection of objects
 * A collection of arrays
 * Or any combination.
 */

 const hobbies = ['reading', 'fly fishing', 'calculus'];
 const mixData = [23, 'BMW', {key: 'value'}];



//  /**  Adding items to an array */
//  const displayArray = document.getElementById('array_display1');
 const arrayAddBtn = document.getElementById('arrayAddBtn'); 
 const arrayAdd = () => {
  const greatBooks = ['To Kill A Mocking Bird', 'As a Man Thinketh', 'Make It Stick'];
  console.log(greatBooks);
  // Notice the three books in the array.
  // Now let's add one. 
  greatBooks.push('The Goal'); // Adds the book to the end of the array
  console.log(greatBooks);
  // Let's add a second
  greatBooks.unshift('Good to Great'); // Adds this book to the start of the array  
  console.log(greatBooks);
 }

 arrayAddBtn.addEventListener('click', arrayAdd);