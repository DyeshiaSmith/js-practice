// modulo (remainder)
console.log(4 % 2);
console.log(5 % 2);
console.log(6 % 2);
console.log(7 % 2);

console.log(6 % 3);
console.log(7 % 3);
console.log(8 % 3);
console.log(9 % 3);

const x = 3;
let y;
console.log(y);

/*
REFRENCE The VALUE BOUND TO 'X'
In this case that is the PRIMITIVE DATA Typ
*
JS will make a copy of the PRIMITIVE,
and ASSIGN that copy (3) to 'y'

this is because PRIMITIVES CANNOT ' share values or memory refrences.'
They must keep theri own COPY.
*/
y = x;

//PRIMITIVES are COMPARED by VALUE (not refrence)
console.log(y == x);
const r = 3;
const s = "3";
false;
//in order to prevent unpredictability steaming from JS implicit conversions, we use '==='
