function solve(inputArr) {
    let sum = 0;
    inputArr.map(n => sum += n);
    console.log(sum);

    let inverseNumsSum = 0;
    inputArr.forEach(n => inverseNumsSum += 1 / n);
    console.log(inverseNumsSum);
        
    let concat = '';
    inputArr.map(n => concat += String(n));
    console.log(concat);

}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);