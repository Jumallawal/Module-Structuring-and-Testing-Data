const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

test("should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

test("should return true when the numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false when a negative numerator has the same magnitude as the denominator", () => {
  expect(isProperFraction(-3, 3)).toEqual(false);
});
