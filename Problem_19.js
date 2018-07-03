var sundays = 0;
for(let year = 1901; year <= 2000; year++){
    for(let month = 0; month <= 11; month++){
        if(new Date(year, month, 1).getDay() === 0){
            ++sundays;
        }
    }
}

console.log(sundays);