function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Pad will be called three (3) times.
// Call formatTimeDisplay with an input of 61, now answer the following:
//
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num is 0.
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value is "00".
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when called the last time is 1, due to pad(remainingSeconds) and remaining seconds is 61 % 60 which is supposed to give a remainder answer of 1.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value is "01" because 1 is converted to a string and padded with a zero at the beginning.