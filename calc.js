//variable declariation for calculations and (some) graph drawing
let num = prompt('Please write the number you wish to test'); //The number given by the user
let calcNum = num; //The number used in conjecture, the first term is the same as the given number
const failsafe = 115; //the failsafe so the info-bar wont overflow the sides or the graph becomes to clustered
let term = [num]; //What term of the conjecture we are on, and the value of that term. Starts with the given number as term 0

//calculating the collatz conjecture for the given number
for(let i=1; term[term.length - 1] != 1; i++) {
  if(calcNum %2 == 0) {
    calcNum = calcNum/2;
    term.push(calcNum);
  }
  
  else if (calcNum %2 != 0 && calcNum != 1){
    calcNum = (calcNum * 3) +1;
    term.push(calcNum);
  }
}
