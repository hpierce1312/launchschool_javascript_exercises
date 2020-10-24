// let name = "Victor";
// console.log(`Good morning ${name}.`);
// console.log(`Good afternoon ${name}.`);
// console.log(`Good evening ${name}.`);

let rlSync = require("readline-sync");
// let name = rlSync.question("What's your name?\n");
// console.log(`Hey ${name}`)

// let fName = rlSync.question("What's your first name?\n");
// let lName = rlSync.question("What's your last name?\n");
// let fullName = fName + " " + lName;
// console.log(fullName);


function name(name, name_resp) {
    name_resp = rlSync.question(`What's your ${name} name?\n`);
    return name_resp;
}

fName = name('first');
lName = name('last');
console.log(`Hello ${fName} ${lName}`);