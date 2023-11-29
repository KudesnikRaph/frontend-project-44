import readlineSync from 'readline-sync';

function isEven(numb) {
  const number = numb;
  if (Math.floor(number / 2) === number / 2) {
    return true;
  }
  return false;
}

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const min = 0;
  const max = 100;

  let trueAnswers = 0;
  while (trueAnswers <= 2) {
    let answer;

    const randomCount = `${Math.floor(Math.random() * (max - min)) + min}`;

    console.log(`Question: ${randomCount}`);
    const userAnsw = readlineSync.question('Your answer:  ');

    if (isEven(randomCount) === true && userAnsw === 'yes') {
      answer = ('Correct!');
    } else if (isEven(randomCount) === false && userAnsw === 'no') {
      answer = ('Correct!');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${Number(randomCount) % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (answer !== 'Correct!') { trueAnswers = 0; }

    console.log(answer);
    trueAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
