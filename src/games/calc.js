import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const gameDescription = 'What is the result of the expression?';

const gameQuestAnsw = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];

  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      break;
  }
  return { question, correctAnswer };
};

export default () => startGame(gameDescription, gameQuestAnsw);
