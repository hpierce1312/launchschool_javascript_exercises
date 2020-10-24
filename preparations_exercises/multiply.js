function multiply() {
    let rlSync = require("readline-sync");
    let num1 = parseFloat(rlSync.question(`Enter the first number: \n`));
    let num2 = parseFloat(rlSync.question('Enter the second number: \n'));
    let multiply = num1 * num2;
    console.log(multiply);
}

multiply();

