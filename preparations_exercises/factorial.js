//let rlSync = require('readline-sync')

// function times(number1, number2) {
//     let result = number1 * number2;
//     console.log(result);
//     return result;
// }

// // let result = times(1, 1);
// // result = times(result, 2);
// // result = times(result, 3);
// // result = times(result, 4);
// // result = times(result, 5);

// //OR

// times(times(times(times(times(1,1),2),3),4),5);


function factorial(input) {
    let result = 1;
    for (input; input > 0; input -= 1) {
        result = result * input;
    }
    return result;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320








