import readlineSync from 'readline-sync';

function randomCount(min, max) {
  return Math.floor(Math.random());
}

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello!, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = randomCount(1, 100);
  let trueAnswers = 0;
  while(trueAnswers <= 2) {
    console.log(`Question: ${number}`);
    const ans = readlineSync.question('Your answer: ');
  }

 
}
