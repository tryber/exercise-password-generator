import generateRandomIndex from './generateRandomIndex';

const getRandomCharacter = (characters) => {
  const charactersArray = characters.split('');
  const randomIndex = generateRandomIndex(charactersArray.length - 1);
  const randomCharacter = charactersArray[randomIndex];
  return randomCharacter;
};

export default getRandomCharacter;
