import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const gameDescription = 'What is the result of the expression?';

const calculateExpression = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = NaN;
  }
  return result;
};

const createQuestionAnswer = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, operation).toString();

  return { question, correctAnswer };
};

export default () => startGame(gameDescription, createQuestionAnswer);
