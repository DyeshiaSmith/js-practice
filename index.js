const num = 8;
//if the #mis greater than 100 or less than0
if (num > 100 || num < 0) {
  console.log("The number is greater than 100 or less than 0,");
}

//if the number is less than 100 AND greater than 0.
if (num > 100 && num < 0) {
  console.log("the number is greater than 100 and less than 0.");
}

//TODO: combine the AND and OR with and 'if" - make up your own
if (num > 1 && num === 8) {
  console.log("you pass");
}
//his example
if ((num > 45 && num < 50) || num === 99) {
  console.log("got an A");
}
// Logical Operators
console.log(true && false); //true and false, b/c youll end up eith false
console.log(true || false); //true OR False. only left side will be evaluated
console.log(!true); // not true. False
console.log(!(true && false)); // not false. which means True
console.log(false || !false); // false // true which means TRUE.

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("we are here" && 0); // false && false
console.log(undefined || null); // false or false
console.log(!``); // true. (b/c empty strings and 0 means falsey)
console.log(!(1 && "false"));
console.log(NaN || !"true");

// TODO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
//let num = 0;
// * your if statement here *

{
}
