function isValidCreditCard(cardNumber) {
  if (typeof cardNumber !== "string" || !/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // A valid card number must contain more than one distinct digit.
  if (new Set(cardNumber).size < 2) {
    return false;
  }

  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  // Adding the digits checks the minimum-sum rule from the exercise.
  const digitSum = [...cardNumber].reduce(
    (sum, digit) => sum + Number(digit),
    0
  );

  return lastDigit % 2 === 0 && digitSum > 16;
}

module.exports = isValidCreditCard;
