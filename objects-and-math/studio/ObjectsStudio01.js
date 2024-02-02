// Code your selectRandomEntry function here:
function selectRandomEntry(arr){
      let index = Math.floor(Math.random()*arr.length);
      return arr[index];
 } 

 let idNumbers = [291, 414, 503, 599, 796, 890];
 let crewArray = [];

 //we have an array.  we want to call the method randomly 3 times, 
 // store it as a temp, 
 // check and see if the array already has the number,
 // if it doenst match, add to the crew array,  if it does, repeat
 //call three times
 
// Code your buildCrewArray function here:

 while (crewArray.length <3) {

  let temp = (selectRandomEntry(idNumbers));
  if(!crewArray.includes(temp)){
      crewArray.push(temp);
  } 
 }

 console.log(crewArray);
 

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crewArrayFinal = [];

function lucky(idNumbers, objects){
  for(let i = 0; i < animals.length; i++){
    if(idNumbers.includes(objects[i].astronautID)){
      crewArrayFinal.push(objects[i].name);
          } 
  }

}lucky(crewArray, animals);

// Code your template literal and console.log statements:
//'____, ____, and ____ are going to space!'
console.log(`${crewArrayFinal[0]}, ${crewArrayFinal[1]}, and ${crewArrayFinal[2]} are going to space!`);