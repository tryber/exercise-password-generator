import getRandomCharacter from './getRandomCharacter';
import generateRandomIndex from './generateRandomIndex';

const characters = {
  0: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  1: 'abcdefghijklmnopqrstuvwxyz',
  2: '0123456789',
  3: '!@#$%^&*()_+-=[]{}|;\':",./<>?',
};

const passwordGenerator = (value, settings) => {
  const settingsArray = Object.values(settings);

  const selectedOptions = settingsArray.reduce((acc, curr, index) => {
    if (curr) acc.push(index);
    return acc;
  }, []);

  let password = '';

  for (let i = 0; i < value; i += 1) {
    const randomIndex = generateRandomIndex(selectedOptions.length - 1);
    const index = selectedOptions[randomIndex];
    const newCharacter = getRandomCharacter(characters[index]);
    password += newCharacter;
  }

  return password;
};

export default passwordGenerator;
