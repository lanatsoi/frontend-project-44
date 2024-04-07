import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const isEven = (number) => number % 2 === 0;

const createQuestionAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playGame = () => {
  startGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    createQuestionAnswer,
  );
};

export default playGame;
