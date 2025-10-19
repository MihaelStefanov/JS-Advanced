function solve(...numbers) {

    let lastNum = -Number.MAX_VALUE;
    for (let num of numbers) {
        if (num > lastNum) {
            lastNum = num;
        }
    }
    console.log(`The largest number is ${lastNum}.`);
    
}

solve(-3, -5, -22.5);