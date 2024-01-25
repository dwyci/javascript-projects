//Write a function makeLine(size) that returns a line with exactly size hashes.

//name the function makeLine with parameter size
console.log("Make Line");
function makeLine(size){
    let line = '';

    for(let i = 0; i < size; i++){
    line+= '#';
}
    return line;
}

console.log(makeLine(5));

console.log("----------------------------------------------------------------");
console.log("Make Square");


function makeSquare(size){
    let square = '';
    for(j=0; j<size; j++){
        
        square += makeLine(size);
        square += "\n";
    }
        return square.slice(0, -1);
    }

console.log(makeSquare(5));

console.log("----------------------------------------------------------------");
console.log(" Make Rectangle");
// Write a function makeRectangle(width, height) that returns a rectangle 
// with the given width and height. Use your makeLine function to do this.

function makeRectangle(width, height){
      let rectangle = ''; 
       for(let k=0; k<height; k++){
            rectangle += makeLine(width);
            rectangle += "\n";
       } 
   
       return rectangle.slice(0,-1);
}
    

console.log(makeRectangle(20,3));
console.log("----------------------------------------------------------------");

// Write a function makeDownwardStairs(height) that prints the staircase pattern 
// shown below, with the given height. Use your makeLine function to do this.
console.log("Make downward Stairs");
function makeDownwardStairs(height){
    let downwardStairs = '';
    for(let k=0; k<height; k++){
        downwardStairs += makeLine(k+1);
        downwardStairs += "\n";

    } return downwardStairs.slice(0,-1);
}

console.log(makeDownwardStairs(15));
console.log("----------------------------------------------------------------");


//Write a function makeSpaceLine(numSpaces, numChars) that returns a line with
// exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
console.log("Make spaces, then line");
function makeSpaceLine(numSpaces, numChars){
    let spaces = '';
    let chars = '';
    let completeLine = spaces + chars +spaces;
    for(let k=0; k<numSpaces; k++){
        spaces += ' ';        
    } 
    
    for(let l=0; l<numChars; l++){
        chars += '#';
    } 
    console.log(spaces+ chars + spaces);
    return completeLine.slice(0, -1);

}

console.log(makeSpaceLine(1, 15));
console.log("----------------------------------------------------------------");

// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
// Consider the top line of the triangle to be level 0, the next to be line 1, and so on. Then 
// line i is a space-line with height - i - 1 spaces and 2 * i + 1 hashes.

console.log("Isoceles Triangle");
function makeIsoscelesTriangle(height){
     let triangle = '';
    for(let i = 0; i< height; i++){
        triangle += (makeSpaceLine(height - i -1, 2*i +1) + '\n');
    }
    return triangle.slice(0,-1);   
  }
console.log(makeIsoscelesTriangle(5));
console.log("----------------------------------------------------------------");

//Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
console.log("Diamond");

function makeDiamond(height){
    let diamond = makeIsoscelesTriangle(height);
    for(i = height; i> 0; i--){
        diamond += (makeSpaceLine(height - i+1 , i *2 -3 ) + '\n');
        
    } 
    return diamond.slice(0, -1);
} 
console.log(makeDiamond(5));
console.log("----------------------------------------------------------------");


