let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   // After you have created the other object literals, add the astronautID property to each one.
   astronautID: 1,
   // Add a move method to each animal object. The move method will select a random number 
   // of steps from 0 to 10 for the animal to take. The number can be 0 as well as 10.
   move: function(){
      return Math.floor(Math.random()*11)
   } 

};
console.log(superChimpOne.move);

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){
      return Math.floor(Math.random()*11)
   } 
};

let superChimpTwo ={
   name:  "Brad",
   species: "Chimpanzee",
   mass:  11,
   age: 6,
   astronautID: 3,
   move: function(){
      return Math.floor(Math.random()*11)
   } 
};

let dog = {
   name:  "Leroy",
   species: "Beagle",
   mass:  14,
   age: 5,
   astronautID: 4,
   move: function(){
      return Math.floor(Math.random()*11)
   } 
}

let dextremophiles = {
   name:  "Almina",
   species: "Tardigrade",
   mass:  0.00000000001,
   age: 1,
   astronautID: 5,
   move: function(){
      return Math.floor(Math.random()*11)
   } 
}
// Create an array to hold the animal objects.

let crew = [superChimpOne,salamander,superChimpTwo,dog,dextremophiles];


// Print out the relevant information about each animal.

function crewReports(object){
   (`${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms.  Their ID is ${object.astronautID}.`);
  
};
 console.log(crewReports(superChimpTwo));
console.log("-----------------------");

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for(let i = 0; i < candidates.length; i ++){
      numSteps = 0;
      turns = 0
      while (numSteps < 20) {
         numSteps += candidates[i].move();
         turns ++;
         console.log(numSteps);
         
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`)
   }   return results;
}

console.log(fitnessTest(crew));
   // Start an animal race!