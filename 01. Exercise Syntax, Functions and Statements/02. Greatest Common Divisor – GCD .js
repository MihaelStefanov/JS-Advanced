function solve(num1, num2) {
    let largerNum = num1;
    let smallerNum = num2;

    while(smallerNum !== 0) {
        let remainder = largerNum % smallerNum;
        largerNum = smallerNum
        smallerNum = remainder;

    }

    return largerNum;

}

console.log(solve(15, 5));

