#!/usr/bin/env node
import readlineSync from 'readline-sync';

const arithmeticProgression = (n, lim) => Array.from(
  { length: Math.ceil(lim / n) },
  (_, i) => (i + 1) * n,
);

export default function brainProgression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let emptyAnsw = 1;
  while (emptyAnsw <= 3) {
    const randonCount = arithmeticProgression(
      Math.floor(Math.random() * (20 - 10)) + 2,
      Math.floor(Math.random() * (200 - 50)) + 50,
    );
    const trueLet = randonCount[3];
    randonCount[3] = '..';
    console.log(`Question: ${randonCount.join(' ')}`);
    const userAnsw = readlineSync.question('You answer: ');
    if (Number(userAnsw) !== Number(trueLet)) {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${trueLet}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    emptyAnsw += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
