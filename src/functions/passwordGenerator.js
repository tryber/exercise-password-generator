import getRandomCharacter from './getRandomCharacter';
import generateRandomIndex from './generateRandomIndex';

const characters = {
  0: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  1: 'abcdefghijklmnopqrstuvwxyz',
  2: '0123456789',
  3: '!@#$%^&*()_+-=[]{}|;\':",./<>?',
};

const passwordValidator = (password, selectedOptions) => {
  let validated = false;
  for (let i = 0; i < selectedOptions.length; i += 1) {
    const charArray = characters[selectedOptions[i]].split('');
    const passwordArray = password.split('');
    validated = passwordArray.some((char) => charArray.includes(char));
    if (!validated) return false;
  }
  return validated;
};

const passwordGenerator = (value, settings) => {
  const settingsArray = Object.values(settings);

  const selectedOptions = settingsArray.reduce((acc, curr, index) => {
    if (curr) acc.push(index);
    return acc;
  }, []);

  let validated = false;

  let password = '';

  while (!validated) {
    for (let i = 0; i < value; i += 1) {
      const randomIndex = generateRandomIndex(selectedOptions.length - 1);
      const index = selectedOptions[randomIndex];
      const newCharacter = getRandomCharacter(characters[index]);
      password += newCharacter;
    }
    validated = passwordValidator(password, selectedOptions);
    if (!validated) password = '';
  }

  return password;
};

export default passwordGenerator;
