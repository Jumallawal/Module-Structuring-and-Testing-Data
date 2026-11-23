// Predict and explain first...

// =============> write your prediction here
//it wont work cause console.log in the scope of the function wouldn't make it work cause nothing to return.
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// console.log cant return the value of a * b, it will give an undefined response. Unless replaced with return.
// Finally, correct the code to fix the problem
//  =============> write your new code here
/* function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); */