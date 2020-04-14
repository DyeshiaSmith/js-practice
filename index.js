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
