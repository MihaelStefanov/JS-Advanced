function solve(inputArray, num) {
    let result = [];
    for (let i = 0; i < inputArray.length; i+=num) {
        result.push(inputArray[i]);
    }
    return result;
    
}

console.log(solve(['5', '20', '31', '4', '20'], 2));