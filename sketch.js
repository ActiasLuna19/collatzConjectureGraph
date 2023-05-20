//variables decloration for the visuals of the program (The graph, the info-bar, and the "reset" button)
const termMax = Math.max(...term); //Finds the highest term value
let xAxisMultipler = 40; //The multipler used in the x axis as the scale
let yAxisMultipler = 10; //The multipler used in the y axis as the scale

const dotSize = 14; //the size of the dots on the graph
let graphWidth = 1000; //The graph's width
let graphLength = 750; //The graph's length
let aGraphX = 50; //alignment numbers for the graph on the x-axis
let aGraphY = 100; //alignment number for the graph on the y-axis
let graphWidthAdd = graphWidth + aGraphX; //The additional numbers needed to allign the graph properly on the x-axis
let graphLengthAdd = graphLength + aGraphY; //The additional numbers needed to allign the graph properly on the y-axis

let barWidth = 400; //The info-bars width
let barLength = graphLength + 75; //the info-bars length
let aBarX = graphWidthAdd + 25; //allignment numbers for the info-bar on the x-axis
let aBarY = aGraphY - 75; //allignment numbers for the info-bar on the y-axis
let aBarTextX = aBarX + 10; //the allignment number used to allign the text in the x-axis in the infobar
let aBarGenY = aBarY + 60;
let aBarListY = aBarY + 300;

const infoBarHist = 'The Collatz Conjecture or the 3n+1 problem is a famous \nunsolved math problem, created and named after \nLothar Collatz who first introduced the idea in 1937.'; //the history of the collatz conjecture
const infoBarGen = 'The conjecture states that if an integer or term is even it \nis divided by two, and if it is odd then you multiply the \nterm by three and add one. Eventually, according to the \nconjecture, every sequence of terms will eventually \nbecome 1 no matter what positive term is chosen to start.'; //General information about the collatz conjecture
const infoBarTerms = 'The terms and their related term value for the number \n' + num + ' are listed below:';

let termListVer; // multiplier used in listing the terms and their value verticaly
let termListHorz = [0, 80, 160, 240]; //adjuster values needed to list the terms horzontaly
let k;

let resButWidth = 200;
let resButLength = 50;
let aButX = aBarX + (barWidth - resButWidth)/2; //alignment numbers for the button on the x-axis
let aButY = barLength - 40; //alignment numbers for the button on the y-axis


//changing the multipler(s) depending on how many terms or the highest term value

while((termMax * yAxisMultipler) > graphLength) {
  yAxisMultipler -= 0.01;
}

while((term.length * xAxisMultipler) > graphWidth) {
  xAxisMultipler -= 0.01;
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
  
  //General infomation about the collatz conjecture 
  textSize(15);
  text(infoBarHist + '\n\n' + infoBarGen + '\n\n' + infoBarTerms, aBarTextX, aBarGenY);
  
  //Listing the terms and there value for the number being tested in the collatz conjecture
  k = 0;
  termListVer = 0;
  textSize(15);
  for(let i= 0; i < term.length; i++) {  
    
    if(termListVer < 23) {
      text((i + 1) + '. ' + term[i], aBarTextX + termListHorz[k], aBarListY + (termListVer * 20));
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
