// arthimetic operators exampels

// sum /add
let add = 16 + 5; //sum or add
let minus = 16 - 5; //subtract or minus
let multiply = 16 * 5; // multiply
let division = 16 / 4; // division
let modulus = 26 % 5; //moduls
let exponent = 5 ** 5; // exponent
console.log("add answer is " + add + " " + "subtract answer is " + minus );

let age = 20;
console.log("before ancrement " + age);
age++;
console.log("after increment " + age);
console.log("before derement " + age);
age--;
console.log("after decrement " + age)
age--;
age--;
console.log(age);
 
// prefix

let ages = 16;
console.log("ages before prefix increament " + ages);
let newAges = ++ages; // 1 + ages (16)
console.log("ages after prefix incrament " + ages);
console.log("newAge after prefix increment " + newAges);

// postfix exmaples

let newAge = 42;
console.log("newAge before postfix increment " + newAge);
 let newAge1 = newAge++ ; // age1 (16) + 1
 console.log("newAge after postfix increment " + newAge);  
 console.log("newAge after postfix increment " + newAge1);  

 // BODMAS rule example

 let state = 5 + 2 * 3 / 3; // result will 7
 console.log(" 5 + 2 * 3 / 3 answer is " + state)

 // assignment operators examples

let one = 10;
let two = 10;
let three = one + two;
console.log(one);
one += two;
one -= two;

//comaprison operators examples

let sum1 = 5;
let sum2 = 6;
console.log("equal value " + (sum1 == 5));
console.log("equal value " + (sum1 == "5"));
console.log("equal value and equal type " + (sum1 === 5));
console.log("equal value and equal type " + (sum1 === "5"));
console.log("not equal to " + (sum1 !=5))
console.log("not equal to " + (sum1 !=7))
console.log("not equal to or equal type " + (sum1 !=="5"))
console.log("not equal to or equal type " + (sum1 !==5))
  console.log("greater than " + (sum1 > 8));
  console.log("less than " + (sum1 < 8));
  console.log("greater than or equals to " + (sum1 >= 8));
  console.log("less than or equals to " + (sum1 <= 8));

  // logical operators examples

  console.log("and operator is " + (sum1 == 5 && sum2 == 6));
  console.log("and operator is " + (sum1 == 6 && sum2 == 5));
  console.log("or operator is " + (sum1 == 5 || sum2 == 6));
  console.log("or operator is " + (sum1 == 5 || sum2 == 5));
  console.log("or operator is " + (sum1 == 7 || sum2 == 5));
  console.log("Not operator is " + (sum1 != sum2));
  console.log("Not operator is " + (!(sum1 == sum2)));

// ternary operators example

let years = 17;
let message = (years < 18) ? "you win" : "you lose" ;
console.log( message);
