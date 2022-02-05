const generateWord = (wordLength, {
  firstChecked: upper, secondChecked: lower,
  thirdChecked: hasNumbers, fourthChecked: symbols }) => {
  const exist = upper || lower || hasNumbers || symbols;
  if (!exist) {
    return 'deve haver pelo menos 1 marcado';
  }
  const ALL_NUMBERS = '0123456789';
  const ALL_LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const ALL_UPPER = ALL_LOWER.toUpperCase();
  const ALL_SYMBOLS = '!@#$%*(.)+-{><}';
  let result = '';
  let allCharacters = '';
  if (upper) {
    result += ALL_UPPER[Math.floor(Math.random() * ALL_UPPER.length)];
    allCharacters += ALL_UPPER;
  }
  if (lower) {
    result += ALL_LOWER[Math.floor(Math.random() * ALL_LOWER.length)];
    allCharacters += ALL_LOWER;
  }
  if (hasNumbers) {
    result += ALL_NUMBERS[Math.floor(Math.random() * ALL_NUMBERS.length)];
    allCharacters += ALL_NUMBERS;
  }
  if (symbols) {
    result += ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)];
    allCharacters += ALL_SYMBOLS;
  }
  while (result.length < wordLength) {
    result += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return result;
};

export default generateWord;
