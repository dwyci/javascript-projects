const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let answer = str.slice(3) + str.slice(0,3);
console.log(answer);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(str);
console.log(`The new twisted word is ${remainder}${firstThree}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = Number(input.question("How many letters would you like to relocate?  "));
console.log(quantity);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userChhoice = str.substring(0,quantity);
let userRemainer = str.substring(quantity);
let userWord = userRemainer + userChhoice;

if(quantity < 0){
        console.log(`That is too few letters and the word was defaulted to  ${remainder}${firstThree}`);
    } else if(quantity > 10){
        console.log(`That is too many letters and the word was defaulted to  ${remainder}${firstThree}`);
      
    } else{
        console.log(`Your new word is :  ${userWord}`);
    }


