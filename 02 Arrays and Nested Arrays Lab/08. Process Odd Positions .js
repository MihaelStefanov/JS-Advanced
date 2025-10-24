function solve(inputArray) {
    let myArr = [];
    inputArray.map(function(num, idx) {
        if (idx % 2 !== 0) {
            num = num * 2;
            myArr.unshift(num);
        }
    });

    console.log(myArr);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3] );