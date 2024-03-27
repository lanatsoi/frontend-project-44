import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameQuestAnsw = () => {
  const num = getRandomInt(1, 100);

  const correctAnswer = getPrime(num) ? 'yes' : 'no';

  return { question: num, correctAnswer };
};

export default () => startGame(gameDescription, gameQuestAnsw);
