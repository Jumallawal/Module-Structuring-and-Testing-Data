function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

//Answer
// a) index starts at 0 and increases by 1 until the character is found or the string ends.
// b) The if statement checks whether the current character matches the character being searched for.
// c) index++ moves to the next character after a non-match.
// d) index < str.length keeps the loop within the string; when it becomes false, the function returns -1.

// Trace for find("code your future", "u"):
// index checks 0 ("c"), 1 ("o"), 2 ("d"), 3 ("e"), 4 (" "), 5 ("y"), 6 ("o"), then 7 ("u").
// At index 7 the if condition is true, so find returns 7.
//
// Trace for find("code your future", "z"):
// index checks each position from 0 through 15; none of the characters is "z".
// index becomes 16, the while condition is false, and find returns -1.
