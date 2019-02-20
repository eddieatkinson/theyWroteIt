export function formatNumber(input) {
  numberOfShares = Number(input);
  if (numberOfShares >= 10000000) {
    let numberOfSharesAsString = (Math.round(numberOfShares / 1000000)).toString();
    input = `${numberOfSharesAsString}M`;
  } else if (numberOfShares >= 1000000) {
    let numberOfSharesAsString = (Math.round(numberOfShares / 100000) / 10).toString();
    input = `${numberOfSharesAsString}M`;
  } else if (numberOfShares >= 100000) {
    let numberOfSharesAsString = (Math.round(numberOfShares / 1000)).toString();
    input = `${numberOfSharesAsString}K`
  } else if (numberOfShares >= 10000) {
    let numberOfSharesAsString = (Math.round(numberOfShares / 100) / 10).toString();
    input = `${numberOfSharesAsString}K`
  } else if (numberOfShares >= 1000) {
    let numberOfSharesAsString = numberOfShares.toString();
    input = `${numberOfSharesAsString.substr(0, 1)},${numberOfSharesAsString.substr(1)}`;
  }
  return input;
}

export function calculateCharactersLeft(input) {
  const charactersUsed = input.length;
  return 280 - charactersUsed;
}
