function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (rank === "A") {
    return 11;
  } else if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
    return 10;
  } else if (/^[2-9]$/.test(rank)) {
    return Number(rank);
  } else {
    throw new Error("Invalid card rank.");
  }
}
module.exports = getCardValue;