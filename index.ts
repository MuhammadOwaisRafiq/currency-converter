#! /usr/bin/env node

// Inquirer for Input //
import inquirer from "inquirer";

// Chalk for Styling //
import chalk from "chalk";
// Currency Rates//
const currencyRates: any = {
  RIYAL: 3.75,
  PALESTINE: 0.71,
  USD: 1, // Base Currency
  EUR: 0.94,
  OMAN: 0.38,
  GBP: 0.81,
  TURKEY: 32.58,
  QATAR: 3.64,
  INR: 83.31,
  PKR: 278.09,
  AFG: 72.13,
  UAE: 3.67,
  MYR: 4.76,
  TAKA: 109.66,
  SYRIA: 13002,
  IRAN: 42075.0,
  IRAQ: 1310.0,
  KUWAIT: 0.31,
  LIBYA: 4.87,
  LEBANON: 89480.43,
  CHINA: 7.25,
  MOROCCO: 10.13,
  AZERBAIJANI: 1.7,
  EGYPTIAN: 48.18,
  FRANCE: 0.94,
  BAHRAIN: 0.38,
  INDONESIA: 16220.95,
  GERMANY: 0.94,
  JORDAN: 0.71,
  NIGERIA: 1075.75,
  YEMEN: 250.38,
  KAZAKHSTAN: 445.35,
  ALBANIAN: 94.9,
  ALGERIAN: 134.8,
  ANGOLAN: 836.0,
  CARRIBBEANDOLLAR: 2.7,
  ANGERTINE: 872.25,
  ARMENIAN: 392.25,
  AUSTRAILIA: 1.55,
  UZBEKISTAN: 12680.66,
  AUSTRIA: 0.94,
  BRAZILIAN: 5.17,
  CANADIAN: 1.37,
  COLOMBIAN: 3911.6,
  DENMARK: 6.99,
  GEORGIA: 2.68,
  GREECE: 0.94,
  HUNGARY: 369.82,
  RUSSIA: 93.03,
  JAPAN: 154.84,
  NKOREA: 899.917,
  SKOREA: 1377.86,
  UK: 0.81,
  UKRAINE: 39.73,
};

// From Currency //
let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.bold.bgRed.white.italic("Enter From Currency"),
    type: "list",
    choices: Object.keys(currencyRates),
  },

  // To Currency //
  {
    name: "to",
    message: chalk.bold.bgRed.white.italic("Enter to Currency"),
    type: "list",
    choices: Object.keys(currencyRates),
  },

  // Enter Amount Here //
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

// Let's change the currency as you need //
let fromAmount = currencyRates[userAnswer.from];
let toAmount = currencyRates[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
