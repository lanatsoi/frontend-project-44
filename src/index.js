import readlineSync from 'readline-sync';

const startGame = (gameDescription, gameQuestAnsw) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  let correctAnswers = 0;
  const maxCorrectAnswer = 3;

  while (correctAnswers < maxCorrectAnswer) {
    const { question, correctAnswer } = gameQuestAnsw();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
