import getRandomCharacter from './getRandomCharacter';
import generateRandomIndex from './generateRandomIndex';

const characters = {
  0: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  1: 'abcdefghijklmnopqrstuvwxyz',
  2: '0123456789',
  3: '!@#$%^&*()_+-=[]{}|;\':",./<>?',
};

const passwordGenerator = (value, settings) => {
  const { upperCase, lowerCase, numbers, symbols } = settings;
  const settingsArray = [upperCase, lowerCase, numbers, symbols];

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

  console.log('value: ', value, upperCase, lowerCase, numbers, symbols);
  console.log('password: ', password);
  console.log('selectedOptions: ', selectedOptions);
};

export default passwordGenerator;
