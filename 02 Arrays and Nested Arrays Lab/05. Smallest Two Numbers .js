function solve(inputArray) {
    let myArr = inputArray.sort((a, b) => a - b);

    return myArr.slice(0, 2);
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));