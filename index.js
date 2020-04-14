// Global scop not enclosed with any '{}'
const x = 3;

const dye = function() {
  //if we declare a variable inside a scope.. its NOT available globally- LOCAL SCOPE || FUNCTION SCOPE
  const y = 4;
  console.log("practicing logging this string and learning functions.");
};

dye();

console.log(dye);
