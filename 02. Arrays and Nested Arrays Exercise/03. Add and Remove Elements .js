function solve(inputArray) {
    let num = 0;
    let result = [];

    for (let command of inputArray) {
        num++;

        if (command == 'add') {
            result.push(num);
        } else {
            result.pop();
        }
        
    }

    if (result.length > 0) {
        return `${result.join('\n')}`;
    } else {
        return `Empty`;
    }

}

console.log(solve(['add', 'add', 'remove', 'add', 'add']));