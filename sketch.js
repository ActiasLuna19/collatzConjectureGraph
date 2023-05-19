//variables decloration for the visuals of the program (The graph, the info-bar, and the "reset" button)
const termMax = Math.max(...term); //Finds the highest term value
let xAxisMultipler = 40; //The multipler used in the x axis as the scale
let yAxisMultipler = 10; //The multipler used in the y axis as the scale

const dotSize = 14; //the size of the dots on the graph
let graphWidth = 1000; //The graph's base width
let graphLength = 725; //The graph's base length
let aGraphX = 50; //alignment numbers for the graph on the x-axis
let aGraphY = 100; //alignment number for the graph on the y-axis
let graphWidthAdd = graphWidth + aGraphX; //The additional numbers needed to allign the graph properly on the x-axis
let graphLengthAdd = graphLength + aGraphY; //The additional numbers needed to allign the graph properly on the y-axis

let barWidth = 370;
let barLength = graphLength + 75;
let aBarX = graphWidthAdd + 25;
let aBarY = aGraphY - 75;
let aBarListX = aBarX + 10;
let aBarListY = aBarY + 70;

let termListVer; // multiplier used in listing the terms and their value verticaly
let termListHorz = [0, 75, 150, 225]; //adjuster values needed to list the terms horzontaly
let k;

let resButWidth = 200;
let resButLength = 50;
let aButX = aBarX + (barWidth - resButWidth)/2; //alignment numbers for the button on the x-axis
let aButY = barLength - 40; //alignment numbers for the button on the y-axis


//changing the multipler(s) depending on how many terms or the highest term value
while((termMax * yAxisMultipler) > graphLength) {
  yAxisMultipler -= 1;
}
while((term.length * xAxisMultipler) > graphWidth) {
  xAxisMultipler -= 1;
}

//The parameters for the button, used to let the program know when the mouse is over the designated button
function buttonParameters () {
  this.mouseX = mouseX;
  this.mouseY = mouseY;
  
  return (this.mouseX >= aButX && this.mouseX <= aButX + resButWidth && this.mouseY >= aButY && this.mouseY <= aButY + resButLength);

}

//setting up the canvas
function setup() {
  createCanvas(1500, 880);
}

function draw() {
  background(207, 255, 217);
  
  //The Header or Tittle
  textSize(40);
  fill(0);
  text('The Collatz Conjecture of ' + num, graphWidth - 700, aGraphY - 40);
  
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
  text("Info-bar", aBarX + barWidth/2.7, aBarY + 35);
  
  //Listing the terms and there value for the number being tested in the collatz conjecture
  k = 0;
  termListVer = 0;
  textSize(15);
  for(let i= 0; i < term.length; i++) {  
    
    if(termListVer < 30) {
      text((i + 1) + '. ' + term[i], aBarListX + termListHorz[k], aBarListY + (termListVer * 20));
      termListVer++
    }
    else {
      k++;
      termListVer = 0;
    }
  }
  //the "reset" button visuals on the bottom
  if(buttonParameters()) {
    fill(171, 227, 86);
  }
  else {
    fill(242, 188, 70);
  }
  rect(aButX, aButY, resButWidth, resButLength);
  
  fill(0);
  textSize(20);
  text('Test New Number', aButX + 20, aButY + 32);
}

//Checks to see if the button is clicked, and if it was then the page reloads (this will restart the program)
function mouseClicked () {
  if(buttonParameters()) {
    location.reload();
  }
}


//Checking the variables
console.log(xAxisMultipler)
console.log(yAxisMultipler)
console.log(term)
