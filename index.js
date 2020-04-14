// 'or' Short Circuit! - "a" is 'truthy', so no need to for '333'
console.log("a" || 333); // a

const a = "";

// 'a' is bound to a 'falsey' empty STRING, so we 'take' 'truthy' '333'.
a || 333; // 333

null || "hello"; // hello

// "a" is 'truthy,' but still must look at '333'
"a" && 333; // 333

// 'and' Short Circuit! - is 'falsey' - don't bother with '333'.
0 && 333; // 0

// 'and' Short Circuit! - 'null 'falsey' - don't bother with 'hello'.
console.log(null && "hello"); // null

// Imagine user left form field blank - no FORM VALIDATION.
// We can assign a default value so that we can still 'accept' the 'form,' but it's clear that the user left that blank.
const userName = "" || "Blank form field"; //

// Imagine that we retrieved some product from database as an OBJECT LITERAL.
const someProduct = {
  name: "Great Widget",
  price: 0 // Bad data entry - no database validation! 😱
};

// We can prevent '0' from being shown to user.
const displayedPrice = someProduct.price || "Please Call For Price!";
