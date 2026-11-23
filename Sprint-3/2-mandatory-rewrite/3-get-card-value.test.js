const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("should return the numeric value for number cards", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

test.each(["J♠", "Q♥", "K♦"])("should return 10 for face card %s", (card) => {
  expect(getCardValue(card)).toEqual(10);
});

test("should throw an error for an invalid card rank", () => {
  expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
});
