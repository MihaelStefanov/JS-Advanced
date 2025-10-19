function solve(number) {
    myString = '* ';

    for (let i = 1; i <= number; i++) {
        console.log(myString.repeat(number));
    }

}

solve(5);