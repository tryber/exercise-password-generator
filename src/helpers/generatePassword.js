// const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
//   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
//   'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
// ];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function getPassword(passwordLength) {
  const password = [];
  for (let index = 0; index < passwordLength; index += 1) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    password.push(numbers[randomIndex]);
  }
  console.log(password);
}

export default getPassword;
