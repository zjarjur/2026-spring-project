import {Simon} from "https://5in-tw.github.io/2026-spring-project/scripts/simon.js";

const game = new Simon('simon');
const buttons = ["yellow", "blue", "red", "green"];

game.addButtons(buttons);

function getRandomButton(){
const randomNumber = Math.random() * buttons.length;
const randomInteger = Math.floor(randomNumber);
console.log(randomNumber,randomInteger);
return buttons[randomInteger];

}

let sequence = [];
let current = 0;

function startGame(){
    sequence = [];
    current = 0;
    game.gameOver = false;
    nextRound();
}

function nextRound(){
    current = 0;
    sequence.push(getRandomButton());
    game.playSequence(sequence);

}

console.log(game);
startGame();
nextRound();
nextRound();