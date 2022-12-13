#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line no-use-before-define
Main();

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let emptyAnsw = 1;
  while (emptyAnsw <= 3) {
    let answ;
    let logic;

    const min = 0;
    const max = 50;
    const randomNumbers1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const randomNumbers2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    const values = ['+', '-', '*'];

    // eslint-disable-next-line max-len, no-inner-declarations, no-shadow
    function random(values) { const radious = Math.floor(Math.random() * values.length); return values[radious]; }

    const randomExample = random(values);
    const example = `${randomNumbers1} ${randomExample} ${randomNumbers2}`;
    console.log(`Question: ${example}`);

    if (randomExample === '+') {
      logic = `${(randomNumbers1 * 1) + (randomNumbers2 * 1)}`;
    } else if (randomExample === '*') {
      logic = `${randomNumbers1 * randomNumbers2}`;
    } else { logic = `${randomNumbers1 - randomNumbers2}`; } // знаки примеров

    const answer = readlineSync.question('Your answer: ');

    if (answer === logic) {
      answ = 'Correct!';
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${logic}'."`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (answ !== 'Correct!') { emptyAnsw = 0; }
    console.log(answ);
    emptyAnsw += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
