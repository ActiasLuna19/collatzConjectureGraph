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
