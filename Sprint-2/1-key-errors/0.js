// Predict and explain first...
//  =============> write your prediction here
// Its not working because str has been declared already as a parameter in the function and hence cant be declared as a variable also.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/* As predicted, the str was already declared hence couldn't be declared twice or even again as a variable.
so to fix this we will change the variable name in line 9 and 10 to capitalisedStr and call the function at the end. */
// =============> write your new code here
/* function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

  console.log(capitalise("jumal")); */