#!/usr/bin/env node
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

function random(values) {
  const radious = Math.floor(Math.random() * values.length);
  return values[radious];
}

export default function brainCalc() {
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
    const randomNumber1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const randomNumber2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    const values = ['+', '-', '*'];
    const randomExample = random(values);
    const example = `${randomNumber1} ${randomExample} ${randomNumber2}`;
    console.log(`Question: ${example}`);

    if (randomExample === '+') {
      logic = `${(randomNumber1 * 1) + (randomNumber2 * 1)}`;
    } else if (randomExample === '*') {
      logic = `${randomNumber1 * randomNumber2}`;
    } else { logic = `${randomNumber1 - randomNumber2}`; }

    const question = readlineSync.question('Your answer: ');

    if (question === logic) {
      answ = 'Correct!';
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${logic}'."`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (answ !== 'Correct!') { emptyAnsw = 0; }
    console.log(answ);
    emptyAnsw += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
