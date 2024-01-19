let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",")
let equipmentArray = equipment.split(",");
let petsArray = equipment.split(",");
let sleepAidsArray = sleepAids.split(",");

/*console.log(foodArray);
console.log(equipmentArray);
console.log(petsArray);
console.log(sleepAidsArray)*/

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

/*let cargoHold = [];
cargoHold = cargoHold.concat(foodArray,equipmentArray,petsArray,sleepAidsArray);
console.log(cargoHold);*/

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if(cabinetNum < 0){
//     console.log("The number you entered is invalid.");
// } else if(cabinetNum>3){
//     console.log("The number you entered is invalid.");
// } else{
//     if(cabinetNum == 0){
//         console.log(foodArray);
//     } else if(cabinetNum == 1){
//         console.log(equipmentArray);
//     } else if(cabinetNum ==2){
//         console.log(petsArray);
//     } else if(cabinetNum ==3){
//         console.log(sleepAidsArray);
//     }
// }   
    

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetNum = input.question("Select a cabinet (0 - 3) in the cargoHold:  ");
let item = input.question("And which item would you like?  ");
if(cabinetNum == 0){
    if(foodArray.includes(item)){
        console.log(`Cabinet ${cabinetNum} DOES contain ${item}.`); 
    }else{
        console.log(`Cabinet ${cabinetNum} DOES NOT contain ${item}.`); 
    }
} else if(cabinetNum ==1){
    if(equipmentArray.includes(item)){
        console.log(`Cabinet ${cabinetNum} DOES contain ${item}.`); 
    }else{
        console.log(`Cabinet ${cabinetNum} DOES NOT contain ${item}.`); 
    }

}else if(cabinetNum ==2){
    if(petsArray.includes(item)){
        console.log(`Cabinet ${cabinetNum} DOES contain ${item}.`); 
    }else{
        console.log(`Cabinet ${cabinetNum} DOES NOT contain ${item}.`); 
    }

}else if(cabinetNum ==3){
    if(sleepAidsArray.includes(item)){
        console.log(`Cabinet ${cabinetNum} DOES contain ${item}.`); 
    }else{
        console.log(`Cabinet ${cabinetNum} DOES NOT contain ${item}.`); 
    }
}