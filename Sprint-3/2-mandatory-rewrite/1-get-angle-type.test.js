const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angles", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

test("should identify obtuse angles", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("should identify straight angles (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angles", () => {
  expect(getAngleType(240)).toEqual("Reflex angle");
});
