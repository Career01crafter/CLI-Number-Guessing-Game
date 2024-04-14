#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
  {
    name: "NumberGuessedByUser",
    type: "number",
    message: "Please guess a number between 0 to 5 to win.",
  },
]);
if (answer.NumberGuessedByUser === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
} else {
    console.log("Please try again! You guessed a wrong number.");
}