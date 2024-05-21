#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\tHello dear! Let's play a number guessing game.");

//to generate random number from computer Math.random is used
//to round off the value of math.random we use math.floor
//to limit the generated number range we write * 10
//to avoid 0 in random number we write +1 
const randomNumber = Math.floor(Math.random() * 10 + 1);

//to take number from user
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "You have to guess a number from 1 to 10 here:"
    },
]);

//to check generated and user guessed number similarity
if(answer.userGuessNumber === randomNumber){
    console.log("Congratulations! You win the game.");
}else{
    console.log("Oops! you lost the game.");
}

console.log(`Hiden number is ${randomNumber}.`);