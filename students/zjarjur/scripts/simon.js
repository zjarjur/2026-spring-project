//Import Commands

import { Simon } from "https://5in-tw.github.io/2026-spring-project/scripts/simon.js";

//Variable Declaration
const myScore = document.getElementById("score");
const myHighScore = document.getElementById("high-score");

const game = new Simon('simon');
const buttons = ["yellow", "blue", "red", "green"];
game.addButtons(buttons);   //Instantiate the game object from the module

let sequence = [];
let current = 0;
let score = 0;
let highScore = 0;



function getRandomButton() {
    const randomNumber = Math.random() * buttons.length;
    const randomInteger = Math.floor(randomNumber);
    console.log(randomNumber, randomInteger);
    return buttons[randomInteger];
}

function startGame() {
    sequence = [];
    current = 0;
    score = 0;
    myScore.textContent = "Score = " + score;
    game.gameOver = false;
    nextRound();
}

function nextRound() {
    current = 0;

    sequence.push(getRandomButton());
    game.playSequence(sequence);
}

function checkButtonPress(event) {
    const buttonId = event.target.id;
    console.log(buttonId);

    //If we press the wrong button, it's game over
    if (sequence[current] !== buttonId) {
        game.gameOver = true;
        return;
    }
    current = current + 1;
    if (current === sequence.length) {
        score = score + 1;
        myScore.textContent = "Score = " + score;
        if (score > highScore) {
            highScore = score;
            myHighScore.textContent = "High Score = " + highScore;
        }
        nextRound();
    }

}

//Event Listeners

const startSimonButton = document.getElementById("start-simon");
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");

startSimonButton.addEventListener("click", startGame);
yellowButton.addEventListener("click", checkButtonPress);
blueButton.addEventListener("click", checkButtonPress);
redButton.addEventListener("click", checkButtonPress);
greenButton.addEventListener("click", checkButtonPress);



console.log(game);

