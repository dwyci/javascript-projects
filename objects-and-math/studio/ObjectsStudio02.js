// Code your orbitCircumference function here:
//Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.


function calcCircumference(radius) {
  let circumference = Math.round(radius*2*Math.PI);
  return circumference;
} 
console.log(calcCircumference(1));

// Code your missionDuration function here:
//Define the missionDuration function to take three parameters - the number of orbits completed, 
//the orbit radius, and the orbital speed. 
//Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.
//For example, with the default radius and speed, 5 orbits will take about 2.24 hours.

let radiusDefault = 2000;
let orbitalSpeedDefault = 28000;

let missionDuration= (numOfOrbits, orbitRadius = radiusDefault, orbitalSpeed= orbitalSpeedDefault) =>{

  let time = ((calcCircumference(orbitRadius)*numOfOrbits)/orbitalSpeed).toFixed(2);
  return time;
}
//'The mission will travel ____ km around the planet, and it will take ____ hours to complete.'
console.log(`The mission will travel ${calcCircumference(radiusDefault)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)



// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
} 


// Code your oxygenExpended function here:
// When you call `oxygenExpended`, feel free to use your`selectRandomEntry` to pick the crew member to pass into the function.



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 