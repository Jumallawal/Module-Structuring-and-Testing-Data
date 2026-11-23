// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//The decimalNumber has already been called as parameter in the function hence cannot be declared again as a variable.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The decimalNumber ws declared twice which which shouldn't be so and also the console.log should not be logging decimalNumber cause it does not exist outside the function scope so should be changed.
// Finally, correct the code to fix the problem
// =============> write your new code here
/* function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); */
