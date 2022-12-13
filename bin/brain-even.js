#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainEven(x) {
  if (Number.isInteger(x) == true) { return x % 2 == 0; } return undefined;
}

function evenOrNot(numb) {
  const number = numb;
  if (Math.floor(number / 2) == number / 2) {
    // Чётное
    return true;
  }
  // Нечётное
  return false;
}

function brainEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const min = 0;
  const max = 100;

  let trueAnswers = 0;
  while (trueAnswers <= 2) {
    let anss;

    const randomCount = `${Math.floor(Math.random() * (max - min)) + min}`;

    console.log(`Question: ${randomCount}`);
    const userAnsw = readlineSync.question('Your answer:  ');

    if (evenOrNot(randomCount) === true && userAnsw === 'yes') {
      anss = ('Correct!');
    } else if (evenOrNot(randomCount) === false && userAnsw === 'no') {
      anss = ('Correct!');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${Number(randomCount) % 2 === 0 ? 'yes' : 'no'}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (anss !== 'Correct!') { trueAnswers = 0; }

    console.log(anss);
    trueAnswers++;
  }

  console.log(`Congratulations, ${name}!`);
}

brainEven();
