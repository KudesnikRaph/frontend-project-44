#!/usr/bin/env node
import readlineSync from 'readline-sync';

function exampleGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return exampleGCD(b, a % b);
}

// eslint-disable-next-line consistent-return
export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let rounds = 1;
  while (rounds <= 3) {
    let roundAnswer;

    const min = 0;
    const max = 100;

    const randomNumbers1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const randomNumbers2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    console.log(`Question: ${randomNumbers1} ${randomNumbers2}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${exampleGCD(randomNumbers1, randomNumbers2)}`) { roundAnswer = 'Correct!'; } else if (userAnswer !== `${exampleGCD(randomNumbers1, randomNumbers2)}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${exampleGCD(randomNumbers1, randomNumbers2)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (roundAnswer !== 'Correct!') { rounds = 0; }
    console.log(roundAnswer);
    rounds += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
