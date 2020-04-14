//variadic Named Parameters
// ... REST PARAMETER wraps up VARIADIC NUMBER OF ARGUMENTS

const dye = function(...hola) {
  console.log(hola);

  for (let i = 0; i < hola.length; i++) {
    console.log(hola[i]);
  }
};

dye("hola", "hey", "hi", "hoy", "sup");
console.log("hola", "hey", "hi", "hoy", "sup");
console.log("hey");

//write a loop to log out each of the greetings 1 at a time
