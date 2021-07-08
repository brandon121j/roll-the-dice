const prompt = require('prompt-sync')();
const dice = prompt('How many sides to the dice are there? ');
const rigged = prompt('What is the rigged number? ');
const roll = Math.ceil(Math.random() * dice + 1);
const numberDice = Number(dice);

if (roll == numberDice +1) {
    roll = rigged;
}

console.log(roll);