// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
    });

test("should return the original string when count is 1", () => {
    expect(repeat("hello", 1)).toEqual("hello");
});

test("should return an empty string when count is 0", () => {
    expect(repeat("hello", 0)).toEqual("");
});

test("should throw an error when count is negative", () => {
    expect(() => repeat("hello", -1)).toThrow("Count must not be negative.");
});
