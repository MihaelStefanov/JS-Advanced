function solve(...inputArr) {
    let inputStringsLength = 0;
    
    inputArr.forEach(string => {
        inputStringsLength += string.length;
    });
    
    console.log(`${inputStringsLength}\n${Math.floor(inputStringsLength / inputArr.length)}`);
    
}

solve('chocolate', 'ice cream', 'cake');