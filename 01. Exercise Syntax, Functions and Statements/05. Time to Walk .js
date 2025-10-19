function solve(steps,  metersInOneStep, speedInKmPerHour) {
    let distanceInKm = (steps * metersInOneStep) / 1000;
    let timeInHours = (distanceInKm / speedInKmPerHour);
    let decimalHours = timeInHours - Math.floor(timeInHours);
    let timeInMinutes = (decimalHours * 60);
    let decimalMinutes = timeInMinutes - Math.floor(timeInMinutes);
    let timeInSeconds = (decimalMinutes * 60) ;

    let breakTimeInMinutes = Math.floor(distanceInKm / 0.5);
    timeInMinutes = Math.floor(timeInMinutes + breakTimeInMinutes);   

    let h = String(timeInHours.toFixed(0)).padStart(2, 0);
    let m = String(timeInMinutes.toFixed(0)).padStart(2, 0);
    let s = String(timeInSeconds.toFixed(0)).padStart(2, 0);

    console.log(`${h}:${m}:${s}`);
}

solve(2564, 0.70, 5.5);