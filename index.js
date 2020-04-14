//log #s from 1 to 10
let currentNum = 1;
let total = 0;
while (currentNum < 100) {
  total += currentNum; // total + total + currentNum
  currentNum = currentNum + 2; //currentNum +=2
  console.log(total);
}

let currentTotal = 0;

// for (some initial condition; some ending condition; some increment interval) {
for (let currentNum = 1; currentNum <= 10; currentNum += 1) {
  currentTotal += currentNum;
}

console.log(currentTotal);
// TODO: Update code to count by 2s and add the numbers from 1 to 100.

// TODO: Use a 'while' loop to log the numbers from 1 to a 100.
// However, if the number is divisible by '3,' log 'Fizz!'. If it' divisible by '5,' log 'Buzz!'.
// If it's d(ivisible by both 3 AND 5, 'log' 'Fizz!Buzz!'. hint log===0, use mod operator [if)]
console.log();
