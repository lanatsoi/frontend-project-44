import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, difference, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  return progression;
};

const hideElementArr = (arr) => {
  const hiddenIndex = getRandomInt(0, arr.length - 1);
  const hiddenArr = Array.from(arr);
  hiddenArr[hiddenIndex] = '..';

  return {
    progression: hiddenArr.join(' '),
    hiddenElement: arr[hiddenIndex].toString(),
  };
};

const createQuestionAnswer = () => {
  const start = getRandomInt(1, 10);
  const difference = getRandomInt(1, 10);
  const length = 5;

  const progression = generateProgression(start, difference, length);

  const { progression: question, hiddenElement } = hideElementArr(progression);

  return { question, correctAnswer: hiddenElement };
};

export default () => startGame(gameDescription, createQuestionAnswer);
