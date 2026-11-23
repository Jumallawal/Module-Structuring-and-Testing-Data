/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("accepts a password that meets all the requirements", () => {
  expect(isValidPassword("Abc1!")).toBe(true);
});

test("rejects passwords shorter than five characters", () => {
  expect(isValidPassword("Ab1!")).toBe(false);
});

test("requires an uppercase English letter", () => {
  expect(isValidPassword("abc1!")).toBe(false);
});

test("requires a lowercase English letter", () => {
  expect(isValidPassword("ABC1!")).toBe(false);
});

test("requires a number", () => {
  expect(isValidPassword("Abcde!")).toBe(false);
});

test("requires one of the specified symbols", () => {
  expect(isValidPassword("Abc12")).toBe(false);
  expect(isValidPassword("Abc1@")).toBe(false);
});

test("rejects a password already in the previous passwords list", () => {
  expect(isValidPassword("Abc1!", ["Abc1!", "Other1$"])).toBe(false);
});

test("accepts a new password not in the previous passwords list", () => {
  expect(isValidPassword("Abc1!", ["Other1$"])).toBe(true);
});

test("rejects non-string password input", () => {
  expect(isValidPassword(null)).toBe(false);
});