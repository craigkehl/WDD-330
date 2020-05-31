

function getMaxLifeValues() {
  const enteredValue = prompt('Maximum life for you and the monster.', '100');

  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
  throw { message: 'Invalid user input, not a number!'};
  }
  return parsedValue;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();  //Cannot control the user's input
} catch (error) {  // try to handle the errow
  console.log(error);  // option - post the error somewhere for documentation
  chosenMaxLife = 100;  // option - insert a default value
  alert('You entered something wrong, default value of 100 was used.');  // Option - notify user
  throw error; // option - rethrow the error after a previous option is executed if you can't continue
} finally {  // for code that should execute whether or not the error is handled
  console.log('data to be saved') //
}