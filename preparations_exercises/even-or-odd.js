function evenOrOdd(num) {
    if (Number.isInteger(num) === false) {
        console.log("not an integer");
        return;
    }

    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd(6.6);



