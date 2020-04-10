//primitives CANNOT be Mutated
//const CANNOT be reassigned
//objects CAN be mutated
//only use "let" when you have to reassign something

const name = "dye";

const color = "brown";

const number = 19;

let x = 17;

x =23;

luckyNumber = 17;
//JS is a DYNAMICALLY typed language.

//"constant" is consistent."let" can be changed.
//everything in java is an object except primitive.

const myObject = {};
myObject.name = "Dyeshia";

git commit -am (shortcut) "add examples for comments with objects, primitives etc"


myObject.pet = "Dog"
console.log(myObject.pet);

//UNDEFINED and NULL are there own PRIMITIVE DATA TYPES
//UNDEFINED
//with CONST must assign value
//CONST CANNOT be reassigned or mutated

const myObject = {
  age: 23
}
//DOT NOTATION says "so inside this object and look for key with some name. Just tell me the value"
console.log(myObject.age, myObject.name);

myObject.wrestler = "undertaker"

console.log(myObject);
//JS shows 'undefined' if we access a key that doesn't exist in an OBJECT.
console.log(myObject.somethingElse);

//chaining
//console.log(me.kids.older)
const me = {
  name:"dye",
  kids: {
    older: "uma"
    younger: "lily"
  }
}
console.log(me.somethingElse); -undefined
console.log(me.somethingElse.again); -undefined/chaining
console.log(undefined.again); -

//console.log(console);
//typeOf gives you variable type






/**
    	* With JS Objects,
    	* we don't HAVE TO put quotation marks around our keys because no matter what JS will expect those to be STRINGS.
    	* With JSON (which is not JS), we MUST always put those quotation marks around each and every key.
    	*/
      const myObj = {
        myString: "String",
        myNum: 23,
        myBoo: true,
        explanation: "We just make up our own STRING keys, and assign whatever value we want. All the while this is all wrapped up under 1 VARIABLE that REFERENCES this OBJECT LITERAL (literal just signifies that we made this OBJECT - it's not 'built in').",
        mackey: "It's easy to make OBJECTS, mmmkay?"
      };

      /**
        * This time, instead of using our usual DOT NOTATION,
        * let's use an alternative syntax - BRACKET NOTATION.
        *
        * Here, we use '[]',
        * but it's critical that we put quotation marks around the name of the key that we want to represent.
        */
      console.log(myObj["myString"]);

      // Dot notation
      console.log(myObj.myNum); *// 23*



