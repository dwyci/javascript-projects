//Write a function makeLine(size) that returns a line with exactly size hashes.

//name the function makeLine with parameter size
function makeLine(size){
    let line = '';

    for(let i = 0; i < size; i++){
    line+= '#';
}
    return line;
}

console.log(makeLine(5));

console.log("----------------------------------------------------------------");


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

// Write a function makeRectangle(width, height) that returns a rectangle 
//with the given width and height. Use your makeLine function to do this.

function makeRectangle(width, height){
      let rectangle = ''; 
       for(let k=0; k<height; k++){
            rectangle += makeLine(width);
            rectangle += "\n";
       } 
   
       return rectangle.slice(0,-1);
}
    

console.log(makeRectangle(20,3));


