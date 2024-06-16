#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: "0.92",
    GBP: "0.76",
    INR: "83.21",
    PKR: "278.84"
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency which you want to convert:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Select the currency which you want to convert in:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter the amount :",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`The amount you want to convert in ${userAnswer.to} is ${convertedAmount} `);
