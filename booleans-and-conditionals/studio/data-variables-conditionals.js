// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:24 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumfuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("The right amount of astronauts.");
} else{
    console.log("There are too many astronauts");
}


// add logic below to verify all astronauts are ready

if(astronautStatus === "ready"){
    console.log("Ready");
} else{
    console.log("Not Ready");
}


// add logic below to verify the total mass does not exceed the maximum limit of 850000
//if the totalMassKg is less than the maximumMassLimit of 85000
if(totalMassKg <= maximumMassLimit){
    console.log("we are within the mass limit")

} else{
    console.log("we are too heavy");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumfuelTemp ){
    console.log("with in range");
}else{
    console.log("out of range");
}

// add logic below to verify the fuel level is at 100%
if(fuelLevel){
    console.log("Fuel level is at 100%");
} else{
    console.log("Fuel level is not at 100%");
}

// add logic below to verify the weather status is clear
if(weatherStatus == "clear"){
    console.log("Weather is clear.");
} else{
    console.log("Weather is not clear.");
}

// Verify shuttle launch can proceed based on above conditions
// Wish your astronauts a safe flight!
console.log("");
console.log("Date:  " + date);
console.log("Time:  " + time);
console.log("Astronaut Count:  " +astronautCount);
console.log("Crew Mass:  " + crewMassKg);
console.log("Fuel Mass:  " + fuelMassKg + " kg");
console.log("Shuttle Mass:  " +shuttleMassKg + " kg");
console.log("Total Mass:  " + totalMassKg + " kg");
console.log("Fuel Temperature:  "+ fuelTempCelsius + " °C")
console.log("Weather Status:  " + weatherStatus);

if(preparedForLiftoff){
    console.log("Have a safe flight!");
} else{
    console.log("Shut down the launch!");
}
