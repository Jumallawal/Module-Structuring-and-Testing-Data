const isValidCreditCard = require("./card-validator");

// Walkthrough for "9999777788880000":
// It has 16 digits, includes multiple different digits, and ends in 0 (even).
// Its digits sum to 4 * 9 + 4 * 7 + 4 * 8 = 96, which is greater than 16,
// so the validator returns true.
test.each(["9999777788880000", "6666666666661666"])(
  "should accept valid card number %s",
  (cardNumber) => {
    expect(isValidCreditCard(cardNumber)).toBe(true);
  }
);

// Walkthrough for "6666666666666661":
// It passes the length and digit checks, and has multiple different digits.
// Its last digit is 1, which is odd, so the validator returns false.
test.each([
  ["a92332119c011112", "contains non-digit characters"],
  ["4444444444444444", "contains only one distinct digit"],
  ["1111111111111110", "has a digit sum that is not greater than 16"],
  ["6666666666666661", "ends in an odd digit"],
  ["123456789012345", "has fewer than 16 digits"],
  ["12345678901234567", "has more than 16 digits"],
])("should reject %s because it %s", (cardNumber) => {
  expect(isValidCreditCard(cardNumber)).toBe(false);
});
