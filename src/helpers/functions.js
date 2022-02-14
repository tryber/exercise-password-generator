import caracters from '../data/caracters';

const createPassword = (lengthPassword, options) => {
  let password = '';
  let temporaryOptions = [...options];

  while (password.length < lengthPassword) {
    if (temporaryOptions.length === 0) temporaryOptions = [...options];

    const indexOptions = Math.ceil(Math.random() * temporaryOptions.length - 1);
    const typeCaracter = temporaryOptions[indexOptions][0];

    const indexCaracter = Math.ceil(Math.random() * caracters[typeCaracter].length) - 1;
    password += caracters[typeCaracter][indexCaracter];

    temporaryOptions.splice(indexOptions, 1);
  }

  return password;
};

export default createPassword;
