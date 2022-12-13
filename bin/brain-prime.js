#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumbers = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

function prime(num) {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
}

function primeGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let emptyAnsw = 0;
  while (emptyAnsw <= 3) {
    if (emptyAnsw >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const quest = randomNumbers();
    console.log(`Question: ${quest}`);
    let userAnswer = readlineSync.question('Your answer: ');

    if (String(userAnswer) === 'yes') {
      userAnswer = true;
    } else if (String(userAnswer) === 'no') {
      userAnswer = false;
    } else {
      userAnswer = null;
    }

    if (prime(quest) === userAnswer) {
      emptyAnsw += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${prime(quest)}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }
}
primeGame();
