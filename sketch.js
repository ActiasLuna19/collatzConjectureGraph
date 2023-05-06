//variable declariation
let num; //The number given
let calcNum; //The number used in conjecture
const failsafe = 100; //the failsafe so the hardrive dosent fry
let term = []; //What term of the conjecture we are on, and the value of that term

//calculating the collatz conjecture for the given number
while (term.length <= failsafe && num != 1) {
  
  if(num %2 == 0) {
    num = num/2;
    term.push(num);
  }
  
  else if (num %2 != 0 && num != 1){
    num = (num * 3) +1;
    term.push(num);
  }
}

//setting up the canvas/ background
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
}
