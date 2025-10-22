function solve(year, month, day) {
    let dateAsString = `${year}/${month}/${day}`; 
    let myDate = new Date(dateAsString);
    myDate.setDate(myDate.getDate() - 1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
}

solve(2016, 9, 30);
solve(2015, 5, 10);