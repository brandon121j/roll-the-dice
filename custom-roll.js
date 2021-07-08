const prompt = require('prompt-sync')();
const dice = prompt('How many sides to the dice are there? ');
const numberDice = Number(dice);

if (dice <= 6) {
    num = numberDice;
    console.log((Math.floor(Math.random()* num) +1))
}