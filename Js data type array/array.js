const person = ["Asad", "Ishaq", "Ali"]; 
const students = [];
students[0] = "Umar";

//access with index

let name = person[1];
 console.log("array name is " + name);

 //change value with index

 person[2] = "Mnaan";
 let name2 = person[2];
 console.log("array name is " + name2 );
 const different = [
    "Ali", //string
     23, //number
      false, //boolean 
       person1 = {car1 : "BMW", car2 : "bugati"}, //object
     Names = ["ishaq" , "smash" , "bakkar"]]; //nested array
     const fruits = ["Apple" , "Orange" , 321, "Mango"];
     let count = fruits.length;

     //let firstElementArray camel casing

     //firstelementarray small letters

     //RISTELEMENTARRAY capital letters

    let firstFruit = fruits[0];
    let lastFruit = fruits[3];
     let lastFruitComplex = fruits[fruits.length - 1];
     let lastFruitComplex1 = fruits[count - 1];
     console.log("with length " + lastFruitComplex);
     console.log("with count " + lastFruitComplex1);
let stringArray = fruits.toString();
console.log("the stringed array is this " + stringArray);
let joinArray = fruits.join(" > ");    
console.log("example of join Array " + joinArray);

//to delete last index element use pop

fruits.pop();

//to add last index element use push

fruits.push("peach");
fruits.push("charry");
fruits.pop();

//to delete first index element use shift

console.log("default array before shift " + fruits);
console.log("on first index we have " + fruits[0]);
 fruits.shift(); 
 console.log("changed array after shift " + fruits);
 console.log("on first inde we have " + fruits[0]);

 // add first index element use unshift

 console.log("normal array before unshift " + fruits + " " + "and our first furit is " + fruits[0]);
 fruits.unshift("water Melon");
 console.log("modify array after unshift " + fruits + " " + "and our first fruit is " + fruits[0]);

 //to delete a spacific index element we use

 console.log("we have at 3 index " + fruits[3]);
 delete fruits[3];
console.log("array after delet index 3 " + fruits);

//concat method examples 

let newarr1 = [1,2,3,4,5];
let newarr2 = [6,7,8,9,10];
let merger = newarr1.concat(newarr2);
console.log(merger);

//flattenign an array examles

let flat1 = [1,2,3[4,5],6,7,8,9,10];
let complexFlat = [1, 2, [3, 4, [ 5, 5, [ 7, 8] ,9 ,10 ] ,11 ,12 ] ,13 ,14 ];
let flatedArray = flat1.flat();
let complexFlatedArray1 = complexFlat.flat(1);
let complexFlatedArray2 = complexFlat.flat(2);
let complexFlatedArray3 = complexFlat.flat(3);
console.log(complexFlatedArray1);
console.log(complexFlatedArray2);
console.log(complexFlatedArray3) ;

//spice method examples

let fruits1 = ["Apple", "mange", "banana" , "stawberry"];
console.log("before splice " + fruits1);
fruits1.splice(0,1,"kiwi", 45, "water melon");
//fruits1.splice(1,2);
console.log("after splice " + fruits1);

//slice method examples

let sliceArray = [1,2,3,4,5,6,7,8,];
console.log("before slice " + sliceArray);
let slicedArray = sliceArray.slice(3,6);
console.log("after slice " + slicedArray);

// indexOf method exmaple

let indexmethod = [1,2,3,4,5,1,2,3,4];
indexmethod.indexOf(4); 
indexmethod.indexOf(4,4);
indexmethod.indexOf(4,-4);
indexmethod.indexOf(10); //if not found item,
console.log("example of indexOf method " + indexmethod.indexOf(4,2));

// lastindexOf method example

let lastindexmethod = [1,2,3,4,5,1,2,3,4];
console.log("example of lastindexOf method " + lastindexmethod.lastIndexOf(4)); 

// sorting method example

const names = ["ishaq", "smash", "code"];
console.log("before sort method " + names);
names.sort();
console.log("after sort method " + names);

// toSorted 2023 method example

const toSorted = ["ali", "danish", "smash", "shahroz", "code"];
console.log("befor toSorted " + toSorted);
names.toSorted();
const sortedArray = toSorted.toSorted();
console.log("after to sorted " + toSorted);
console.log("sorted array " + sortedArray);

// reverse method example

console.log("before reverse " + toSorted);
toSorted.reverse();
console.log("after reverse " + toSorted);

// numaric sort example acanding order

const points = [45, 23, 12, 4, 1, 56, 100];
console.log("before sorted compare function " + points);
points.sort(function(a,b){return a - b; });
console.log("after sorted compare function " + points);

// with decanding order

const points1 = [45, 23, 12, 4, 1, 56, 100];
console.log("before sorted compare function decanding " + points1);
points1.sort(function(a,b){return b - a; });
console.log("after sorted compare function decanding " + points1);

// find min number and max number in array

console.log("min num " + points[0] + " " + "and max number " + points[points.length - 1]);