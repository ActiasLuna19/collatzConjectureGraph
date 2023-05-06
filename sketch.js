//variable declariation
let num = 20; //The number given
let calcNum = num; //The number used in conjecture, the first term is the same as the given number
const failsafe = 100; //the failsafe so the hardrive dosent fry
let term = [num]; //What term of the conjecture we are on, and the value of that term. Starts with the given number as term 0

let dotSize = 10;
let xAxisMultipler = 40; //The multipler used in the x axis
let yAxisMultipler = 10;

//calculating the collatz conjecture for the given number
while (term.length <= failsafe && calcNum != 1) {
  
  if(calcNum %2 == 0) {
    calcNum = calcNum/2;
    term.push(calcNum);
  }
  
  else if (calcNum %2 != 0 && calcNum != 1){
    calcNum = (calcNum* 3) +1;
    term.push(calcNum);
  }
}


//setting up the canvas/ background
function setup() {
  createCanvas((term.length * xAxisMultipler) + 175, 700);
}

function draw() {
  background(220);
  
  textSize(20);
  text('The Collatz Conjecture of ' + num, 100, 40);
  
  //Base graph (General layout)
  line(75, 100, 75, 625); //top line
  line(75, 625, (term.length * xAxisMultipler) + 75, 625); //bottom line
  
  
  for(let i = 0; i <= term.length; i++) {
    //the line connecting the dots
    line(75 + (i * xAxisMultipler), 625 - (term[i] * yAxisMultipler), 75 + (( i+ 1) * xAxisMultipler), 625 - (term[i + 1] * yAxisMultipler));
    
    //The dot, term in relation to term value
    ellipse(75 + (i * xAxisMultipler), 625 - (term[i] * yAxisMultipler), dotSize);
  }
  
}

//Checking the terms
console.log(term.length)
console.log(term)
