//variable declariation
let num = prompt("Please enter a number here"); //The number given
let calcNum = num; //The number used in conjecture, the first term is the same as the given number
const failsafe = 100; //the failsafe so the hardrive wont fry
let term = [num]; //What term of the conjecture we are on, and the value of that term. Starts with the given number as term 0

let dotSize = 12;
let xAxisMultipler = 40; //The multipler used in the x axis
let yAxisMultipler = 10; //The multipler used in the y axis
let screenWidth = 1450;
let screenHeight = 850;

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

//changing the multipler(s) depending on how many terms or the highest term value
while ((term.length * xAxisMultipler) + 175 >= screenWidth) {
  xAxisMultipler -= 1;
}

while((Math.max(...term) * yAxisMultipler) + 175 >= screenHeight) {
  yAxisMultipler -= 1;
}

//variables in relation to the term
let termMax = Math.max(...term); //Finds the highest term value
let xAxis = (term.length * xAxisMultipler); //the length added to the x-axis dependat on the term length
let yAxis = (termMax * yAxisMultipler); //the height added to the y-axis depensant on the highest term

//setting up the canvas/ background
function setup() {
  createCanvas(screenWidth, screenHeight);
}

function draw() {
  background(220);
  
  textSize(20);
  text('The Collatz Conjecture of ' + num, 100, 40);
  
  //Base graph (General layout)
  line(75, 100, 75, yAxis + 100); //top line
  line(75, yAxis + 100, xAxis + 75, yAxis + 100); //bottom line
  
  
  for(let i = 0; i <= term.length; i++) {
    //the line connecting the dots
    line(75 + (i * xAxisMultipler), yAxis + 100 - (term[i] * yAxisMultipler), 75 + (( i+ 1) * xAxisMultipler), yAxis + 100 - (term[i + 1] * yAxisMultipler));
    
    //The dot, term in relation to term value
    ellipse(75 + (i * xAxisMultipler), yAxis + 100 - (term[i] * yAxisMultipler), dotSize);
  }
  
}

//Checking the terms
console.log(term)
