#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type: ",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 25000],
        message: "Select Your amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = 500000;
    console.log("Previous Balance: ", balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your Remaining Balance Is: ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
