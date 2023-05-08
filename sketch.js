//variable declariation for calculations and (some) graph drawing
let num = 25; //The number given by the user
let calcNum = num; //The number used in conjecture, the first term is the same as the given number
const failsafe = 200; //the failsafe so the hardrive wont fry
let term = [num]; //What term of the conjecture we are on, and the value of that term. Starts with the given number as term 0

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

//variables in relation to the term, graph adjustments, and info bar
let termMax = Math.max(...term); //Finds the highest term value
let dotSize = 14;
let xAxisMultipler = 40; //The multipler used in the x axis as the scale
let yAxisMultipler = 10; //The multipler used in the y axis as the scale

let graphWidth = 960; //The graph's base width
let graphLength = 675; //The graph's base length
let aGraphX = 75; //alignment numbers for the graph on the x-axis
let aGraphY = 100; //alignment number for the graph on the y-axis
let graphWidthAdd = graphWidth + aGraphX; //The additional numbers needed to allign the graph properly on the x-axis
let graphLengthAdd = graphLength + aGraphY; //The additional numbers needed to allign the graph properly on the y-axis

let barWidth = 350;
let barLength = graphLength + 75;
let aBarX = graphWidthAdd + 40;
let aBarY = aGraphY - 75;

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
  textSize(40);
  fill(0);
  text('The Collatz Conjecture of ' + num, graphWidth - 700, aGraphX - 10);
  
  //The graph background
  fill(255);
  rect(aGraphX, aGraphY, graphWidth, graphLength);
  
  //The axes
  strokeWeight(5);
  fill(0);
  line(aGraphX, aGraphY, aGraphX, graphLengthAdd); // y-axis
  line(aGraphX, graphLengthAdd, graphWidthAdd, graphLengthAdd); //x-axis
  
  for(let i = 0; i <= term.length; i++) {
    
    //the line connecting the dots
    strokeWeight(2);
    line(aGraphX + (i * xAxisMultipler),  graphLengthAdd - (term[i] * yAxisMultipler), aGraphX + (( i+ 1) * xAxisMultipler), graphLengthAdd - (term[i + 1] * yAxisMultipler));
    
    //The dot, term in relation to term value
    strokeWeight(1);
    fill(242, 188, 70);
    ellipse(aGraphX + (i * xAxisMultipler), graphLengthAdd - (term[i] * yAxisMultipler), dotSize);
  }
  
  //The info bar on the right
  fill(247, 223, 178);
  rect(aBarX, aBarY, barWidth, barLength);
  
  fill(0);
  textSize(25);
  text("Info-bar", aBarX + barWidth/2.7, aBarY + 30);
  
  textSize(15);
  text('Test', aBarX + 10, aBarY + 70);
}

//Checking the variables
console.log(yAxisMultipler)
console.log(xAxisMultipler)
console.log(term)
