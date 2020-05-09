// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const sum = originalArray.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0); 

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// };

// let user = makeUser();

// alert( user.ref().name ); // John


/** Calculator Object */
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

// ladder.up().up().down().showStep();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// Objects - reference values
// let person ={
//   first: 'Craig',
//   age: 50,
//   hobbies: ['Reading', 'Languages'],
//   greet: function() {
//     alert('Hi there!');
//   }
// }


// /** Objects - Dynamically set and recall key names */

// const keyName ='last';

// person[keyName] = 'Kehl';  // square bracket notation allows you to dynamically assign and retrieve key names.
// console.table(person);

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']