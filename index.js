#! /usr/bin/env node
import inquirer from "inquirer";
//Asking question from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the following operations:",
        type: "list",
        name: "operator",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    }
]);
// console.log(answers);
//conditional Statements If Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else
    ("Invalid Input");
