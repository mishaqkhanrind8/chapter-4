// string methods
// 1. length method of string

let name3 = "ishaqKhan";
let totalCount = name3.length;
console.log(totalCount);

//2. extraction methods
// a. charAT() method

let extractedChar = name3.charAt(5);
console.log(extractedChar);

 // 2.charCodeAt() method

 let extractedCharCode = name3.charCodeAt(5);
 console.log(extractedCharCode);

 // at() method

 let negChar = name3.at(3);
 console.log(negChar);

 let negChar1 = name3.at(-3);
 console.log(negChar1);

 // property access method 

 let value = name3[4]
 console.log(value)

 let value2 = name3[24];
 console.log(value2);

 // extracting string parts
 // slice, substring , substr

 // slice method

 let persons = "Ishaq, Yaqub, Ismail";
 
 let person1 = persons.slice(7, 12);
 console.log(person1);
 
 let person2 = persons.slice(7);
 console.log(person2);

 let person3 = persons.slice(-6);
console.log(person3);

// substring method

let person4 = persons.substring(7, 12);
console.log(person4);

let person5 = persons.substring(7);
console.log(person5);

let person6 = persons.substring(-7);
console.log("value negative " + person6);

// substr method

let person7 = persons.substr(7, 5);
console.log(person7);

// upper case and lower case letters examples

let capital = persons.toUpperCase();
console.log(capital);

let small = persons.toLowerCase();
console.log(small);

// concatination method example

let firstName = "Ishaq";
let lastName = "Khan";
let fullName = firstName.concat(" " + lastName);
console.log(fullName);