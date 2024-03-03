import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findNod = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gameQuestAnsw = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findNod(num1, num2).toString();

  return { question, correctAnswer };
};

export default () => startGame(gameDescription, gameQuestAnsw);
