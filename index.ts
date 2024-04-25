#! /usr/bin/env node
import inquirer from "inquirer";

let balance: number = 10000; //Current balance
let savePin: number = 1215;
const pin_no = await inquirer.prompt([
  { message: "Enter your PIN Number: ", type: "number", name: "userPin" },
]);
if (pin_no.userPin === savePin) {
  const answer = await inquirer.prompt([
    {
      message: "What you want to do? ",
      type: "list",
      name: "doThis",
      choices: ["Withdraw cash", "Fast Cash", "Check balance"],
    },
  ]);

  if (answer.doThis === "Withdraw cash") {
    const withdraw = await inquirer.prompt([
      { message: "Enter amount: ", type: "number", name: "cash" },
    ]);
    if (balance >= withdraw.cash) {
      console.log("your remaining balance is: ", balance - withdraw.cash);
    } else console.log("Insufficient Entry");
  }
  if (answer.doThis === "Check balance") {
    console.log("your current balance is: ", balance);
  }
  if (answer.doThis === "Fast Cash") {
    const fastCash = await inquirer.prompt([
      {
        message: "Select one of them: ",
        type: "list",
        name: "selectedCash",
        choices: [1000, 2000, 3000, 4000, 5000],
      },
    ]);
    console.log("you withdraw: ", fastCash.selectedCash);
    console.log("your remaining balance is: ", balance - fastCash.selectedCash);
  }
} else console.log("you enter a Wrong PIN...!");
