#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let emptyAnsw = 1;
  while (emptyAnsw <= 3) {
    // eslint-disable-next-line no-inner-declarations
    function exampleGCD(a, b) {
      if (b === 0) {
        return a;
      }
      return exampleGCD(b, a % b);
    }

    let logic;

    const min = 0;
    const max = 100;

    const randomNumbers1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const randomNumbers2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    console.log(`Question: ${randomNumbers1} ${randomNumbers2}`);

    const userAnsw = readlineSync.question('Your answer: ');

    if (userAnsw === `${exampleGCD(randomNumbers1, randomNumbers2)}`) { logic = 'Correct!'; } else if (userAnsw !== `${exampleGCD(randomNumbers1, randomNumbers2)}`) {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${exampleGCD(randomNumbers1, randomNumbers2)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (logic !== 'Correct!') { emptyAnsw = 0; }
    console.log(logic);
    emptyAnsw += 1;
  }
  console.log(`Congratulations, ${name}!`);
  console.log('JOPA');
}
Main();
