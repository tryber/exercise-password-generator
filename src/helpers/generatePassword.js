const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const symbols = ['!', '@', '#', '$', '%', '¨', '&', '*', '-', '_', '+', '='];

function getPassword(passwordLength, settings) {
  const password = [];
  const characters = {
    numbers: settings.IncludeNumbers ? numbers : [],
    uppercase: settings.IncludeUppercase ? uppercaseAlphabet : [],
    lowercase: settings.IncludeLowercase ? lowercaseAlphabet : [],
    symbols: settings.IncludeSymbols ? symbols : [],
  };

  const passwordCharacters = Object.values(characters).flat();
  for (let index = 0; index < passwordLength; index += 1) {
    const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password.push(passwordCharacters[randomIndex]);
  }
  return password;
}

export default getPassword;
