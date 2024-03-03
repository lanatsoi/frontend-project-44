import readlineSync from 'readline-sync';
import getRandomInt from '../getRandom.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);

const isEven = (number) => number % 2 === 0;

const playGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const question = getRandomInt(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!\n');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
