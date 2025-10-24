function solve(inputArray) {
    let myArr = inputArray.sort((a, b) => a - b);
    let halfOfArr = Math.floor(myArr.length / 2);
    let result = myArr.slice(halfOfArr);
    
    return result;

}

console.log(solve([4, 7, 2, 5]),
solve([3, 19, 14, 7, 2, 19, 6]));


