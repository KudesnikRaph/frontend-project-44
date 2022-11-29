import readlineSync from 'readline-sync';

export default function Main(){
    console.log('Welcome to the Brain Games!');
    let name = prompt("May I have your name?",'');
    alert(`Hello!, {$name}`);
}
