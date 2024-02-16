//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore = (score) => {
        this.scores.push(score);
    
    }
    average = () =>{
        const sum = this.scores.reduce((total,score) => total + score, 0);
        const averageScore = sum/this.scores.length;
        return Math.round(averageScore*10)/10;
}
//Add a status() method to CrewCandidate. 
//The method returns a string (Accepted, Reserve, Probationary, or Rejected) depending on a candidate’s average.
    status = () => {
        const avg = this.average();
        if(avg>= 90){
            return "Accepted";            
        } else if(avg >= 80){
            return "Reserve";
        } else if(avg >= 70){
            return "Probationary";
        } else{
            return "Rejected";
        }

        
       

    }
}

//a. Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90. b. Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
//c. Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

bubbaBear.addScore(83);

console.log(bubbaBear.scores);
console.log(bubbaBear.average());
console.log(merryMaltese.average());

console.log(bubbaBear.status());
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()} `);

//Create an addScore method in CrewCandidate. The function must take a new score as a parameter. 
//Code this function OUTSIDE of constructor. (If you need to review the syntax, revisit Assigning Class Methods).


//Add methods for adding scores, averaging scores and 
//determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.