function solve(inputArray) {
    let listArr = inputArray.sort((a, b) => a.localeCompare(b));

    for (i = 0; i < listArr.length; i++) {
        let listNum = i+1;
        console.log(`${listNum}.${listArr[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);