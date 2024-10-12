// switch case 

let grade = prompt();
switch (grade){
 case "A":
console.log("your grade is " + grade);
break;
case "B":
console.log("your grade is " + grade);
break;
case "C":
console.log("your grade is " + grade);
break;
default:
console.log("you have input wrong code " + grade);
break;}

// switch statement common cases
let x2 = 4;
let y3 = 1;

switch( x2 + y3){
case 0:
case 2:
case 6:
console.log("your number is even")
break;
case 1: 
case 3:
case 5:
console.log("your number is odd")
break;
default: 
console.log("not a number")
break;
}