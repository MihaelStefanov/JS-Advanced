function solve(speed, area) { 
    let residentialSpeedLimitInKm = 20;
    let citySpeedLimitInKm = 50;
    let interstateSpeedLimitInKm = 90;
    let motorwaySpeedLimitInKm = 130;
    
    let speedingStatus;
    let difference;
    let currentArea;

    switch(area) {
        case 'residential': 
        difference = speed - residentialSpeedLimitInKm;
        currentArea = residentialSpeedLimitInKm;
        break;

        case 'city': 
        difference = speed - citySpeedLimitInKm;
        currentArea = citySpeedLimitInKm;
        break;    

        case 'interstate': 
        difference = speed - interstateSpeedLimitInKm;
        currentArea = interstateSpeedLimitInKm;
        break;

        case 'motorway': 
        difference = speed - motorwaySpeedLimitInKm;
        currentArea = motorwaySpeedLimitInKm;
        break;    
    }
    
    function status(difference, speedingStatus) {
    
            if (difference < 21) {
                speedingStatus = "speeding"
            } else if (difference < 41) {
                speedingStatus = "excessive speeding"
            } else if (difference > 40) {
                speedingStatus = "reckless driving"
            }   
            return `The speed is ${difference} km/h faster than the allowed speed of ${currentArea} - ${speedingStatus}`;
    }
    
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentArea} zone`);
    } else {
        console.log(status(difference, speedingStatus));   
    }
    
}

solve(130, 'residential');

