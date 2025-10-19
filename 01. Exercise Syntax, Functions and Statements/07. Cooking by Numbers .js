function solve(...input) {
    let num = Number(input.shift());

    for (let command of input) {

        switch(command) {
            case 'chop': num = num / 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num = num += 1; break;
            case 'bake': num = num * 3; break;
            case 'fillet': num -= num * 0.20; break;
        }

        console.log(num);  
    }
    
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');