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
 let greatBooks = [];
 const arrayAddBtn = document.getElementById('arrayAddBtn'); 
 const arrayAdd = () => {
  greatBooks = ['To Kill A Mocking Bird', 'As a Man Thinketh', 'Make It Stick'];
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


 /** not yet added to notebook */
 /****  pop() shift()   ****/
 const arraySub = () => {
   const popped = greatBooks.pop(); // removes the last element from the array.
   console.log(greatBooks);
   console.log(popped);
   const shifted = greatBooks.shift(); // removes the first element from the array
      console.log(greatBooks);
   console.log(shifted);
 }

 /** splice() let's you choose any position in the array and remove any number of items, add items or replace them. It returns the new length. */
 // Here I added four more of my favorite books.
 greatBooks.splice(0, 0, 'The Challenger Sale', 'The Power of Habit', 'The Right It', 'Essential Scrum');

 /** slice() is different in that it creates a new array sliced from any part of the whole of the array being copied */
 const greatBooksforMySon = greatBooks.slice(0,); // parameters are start location (inclusive) to the end location (not-inclusive).

/****  concat() ***
 * Will grab the existing elements of its array and can concatinate it with other arrays, extracting the other arrays elements also and creating a new array with the concatinated results.
 */

 const part1 = [15, 20, 25];
 const part2 = [30, 35, 40];
 const whole = part1.concat(part2); // whole = [15, 20, 25, 30, 35, 40]


 /***************** array.indexOf() and array.lastIndexOf() ************** 
  * If I need to find the index of a value, I can use the indexOf() method. It only returns the first instance it finds. lastIndexOf() finds the last instance. If none is found it returns -1 */

 const myIndex = whole.indexOf(35); // myIndex = 4

const personalData = [{ name: 'Max' }, { name: 'Manuel' }];
const indx = personalData.indexOf({ name: 'Manuel' });
console.log(indx);


 /******** array.find() and array.findIndex() ********/
 const manuel = personalData.find((person, idx, persons) => {
   return person.name === 'Manuel';
 });



/**************** for of loop ***********************/
const prices = [10.99, 5.99, 3.99, 6.59];
const tax =0.19;
const taxAdjustedPrices = [];

for (const price of prices) {
  taxAdjustedPrices.push(Math.round(price * (1 + tax)*100)/100);
}


/**************** array.forEach() ***********************/
const prices1 = [10.99, 5.99, 3.99, 6.59];
const tax1 =0.19;
const taxAdjustedPrices1 = [];

prices1.forEach((price, idx, prices)=> {
  const priceObj1 = {index: idx, taxAdjPrices: price * (1 + tax1)}
  taxAdjustedPrices1.push(priceObj1); // Does not return an object, so we much push a new one
});


/******************* array.map()   **********************/
const prices2 = [10.99, 5.99, 3.99, 6.59];
const tax2 =0.19;

const taxAdjustedPrices2 = prices2.map((price, idx, prices) => {
  const priceObj2 = { index: idx, taxAdjPrices: price * (1 + tax2)};
  return priceObj2;  // returns new object
});

console.log(prices2, taxAdjustedPrices2);

/************* array.sort() and array.reverse() ***********/


/***************** array.filter()  ******************** */
// full standard form
const filteredArray = prices2.filter((price, index, prices) => {
  return price > 6; //the filter - only return prices greater than 6.
});

// condensed to minium required for an Arrow Function
const sum = prices2.filter(p => p > 6);


/******************  array.reduce() ********************/
// full standard form
const sum1 = prices2.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;  
}, 0);

// condensed to minium required for an Arrow Function
const sum2 = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);


/********************* method chaining *******************/
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum3 = originalArray.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0); 




/************* string.split('delimiter') ******************/
const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];



/************* array.join('separator') *********************/
// join fragments together. This is one way you could write data to file as text and us split to restore it after you have read it back in.

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' '); // joined with whitespace
console.log(name);

/***************** spread operator ... ********************/
const copiedNameFragments = [...nameFragments]; // a new copy is made, not a reference, but a copy.

// The spread operator can also help convert string numbers to primitive type numbers. See prices on line 131.
console.log(Math.min(prices)); //will not work, because the prices aren't a number.

console.log(Math.min(...prices)); //now the copy array is numbers and works to find the lowest number.