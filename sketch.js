//variable declariation
let num = 25; //The number given by the user
let calcNum = num; //The number used in conjecture, the first term is the same as the given number
const failsafe = 100; //the failsafe so the hardrive wont fry
let term = [num]; //What term of the conjecture we are on, and the value of that term. Starts with the given number as term 0

let dotSize = 14;
let xAxisMultipler = 40; //The multipler used in the x axis as the scale
let yAxisMultipler = 10; //The multipler used in the y axis as the scale
let graphWidth = 960; //The graph's base width
let graphLength = 675; //The graph's base length

//calculating the collatz conjecture for the given number
while (term.length <= failsafe && calcNum != 1) {
  
  if(calcNum %2 == 0) {
    calcNum = calcNum/2;
    term.push(calcNum);
  }
  
  else if (calcNum %2 != 0 && calcNum != 1){
    calcNum = (calcNum * 3) +1;
    term.push(calcNum);
  }
}

//variables in relation to the term
let termMax = Math.max(...term); //Finds the highest term value

//changing the multipler(s) depending on how many terms or the highest term value
while((termMax * yAxisMultipler) > graphLength) {
  yAxisMultipler -= 1;
}
while((term.length * xAxisMultipler) > graphWidth) {
  xAxisMultipler -= 1;
}

//setting up the canvas/ background
function setup() {
  createCanvas(1450, 880);
}

function draw() {
  background(207, 255, 217);
  
  //The Header or Tittle
  textSize(25);
  fill(0);
  text('The Collatz Conjecture of ' + num, graphWidth/3, 58);
  
  //The graph background
  fill(255);
  rect(75, 100, graphWidth, graphLength);
  
  //The axes
  strokeWeight(5);
  fill(0);
  line(75, 100, 75, graphLength + 100); // y-axis
  line(75, graphLength + 100, graphWidth + 75, graphLength + 100); //x-axis
  
  for(let i = 0; i <= term.length; i++) {
    
    //the line connecting the dots
    strokeWeight(2);
    line(75 + (i * xAxisMultipler),  775 - (term[i] * yAxisMultipler), 75 + (( i+ 1) * xAxisMultipler), 775 - (term[i + 1] * yAxisMultipler));
    
    //The dot, term in relation to term value
    strokeWeight(1);
    fill(242, 188, 70);
    ellipse(75 + (i * xAxisMultipler), 775 - (term[i] * yAxisMultipler), dotSize);
  }
  
}

//Checking the variables
console.log(yAxisMultipler)
console.log(xAxisMultipler)
console.log(term)
