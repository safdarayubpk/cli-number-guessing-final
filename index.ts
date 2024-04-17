#! /usr/bin/env node


import inquirer from "inquirer";


// 1. Computer will generate random number

// 2. User input for guessing number

// 3. Compare user input with computer generated number and show result


const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number guessing game");

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 10 :  ",
    },
    
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratualtions! You guessed the right number");
}else{
    console.log("Sorry! You guessed the wrong number");
}