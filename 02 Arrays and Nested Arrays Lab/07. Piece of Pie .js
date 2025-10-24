function solve(inputArray, inputStringStart, inputStringEnd) {
    let startIdx = inputArray.indexOf(inputStringStart);
    let endIdx = inputArray.indexOf(inputStringEnd);

    let pieList = inputArray.slice(startIdx, endIdx + 1);

    return pieList;
}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie', 'Lemon Meringue Pie'));