// let counter = 1;
// while (counter <= 10) {
//     console.log(counter);
//     counter ++;
// }



// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
// let upperNames = [];
// let index = 0;

// while (index < names.length) {
//     let upperCaseName = names[index].toUpperCase();
//     upperNames.push(upperCaseName);
//     index ++;
// }

// console.log(upperNames);




// let rlSync = require('readline-sync');

// let answer;
// do {
//     answer = rlSync.question("Do you want to do that again? ");
// } while (answer === 'y');


// let names = ['Kevin', 'Chris', 'Naveed', 'Pete', 'Victor'];
// let upperNames = [];

// for (let index = 0; index < names.length; index ++) {
//     let upperCaseName = names[index].toUpperCase();
//     upperNames.push(upperCaseName);
// }

// console.log(upperNames);


// let names = ['Kevin', 'Chris', 'Naveed', 'Pete', 'Victor'];
// let upperNames = [];

// for (let index = 0; index < names.length; index ++) {
//     if (names[index] === 'Naveed') {
//         continue;
//     }
//     let upperCaseName = names[index].toUpperCase();
//     upperNames.push(upperCaseName);
// }

// console.log(upperNames);



let names = ['Kevin', 'Chris', 'Naveed', 'Pete', 'Victor'];

names.forEach(function (name) {
    console.log(name)
});

//

names.forEach(name => console.log(name));