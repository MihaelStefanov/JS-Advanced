function solve(month, year) {
    let DaysInTheMonth = new Date(year, month, 0).getDate();

    console.log(DaysInTheMonth);   
}

solve(1, 2012);