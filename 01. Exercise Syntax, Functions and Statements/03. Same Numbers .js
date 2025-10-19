function solve(num) {
    let numToString = String(num).split(''); 

    let firstEl = numToString.shift();

    let isSame = true;
    let sum = Number(firstEl);

    numToString.map(el => {
        sum += Number(el);
        if (el !== firstEl) {
            isSame = false;
        }
    });

    if (isSame) {
        console.log(`${isSame}\n${sum}`);
    } else {
        console.log(`${isSame}\n${sum}`);
    }

}

solve(7777);