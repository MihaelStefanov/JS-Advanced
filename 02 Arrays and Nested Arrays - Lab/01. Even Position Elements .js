function solve(inputArray) {
    let resultArray = [];

    for (let i = 0; i < inputArray.length; i++ ) {
        if (i % 2 == 0) {
            resultArray.push(inputArray[i]);
        }
    }

    console.log(resultArray.join(' '));
}

solve(['20', '30', '40', '50', '60'] );