// function example defined without default values

function subtract1(a1, a2, a3) {
    let result = a1 - a2 - a3 ;
    console.log("your result is " + result);
}

//function with default values

function subtract2(a1 =10, a2 = 20, a3 = 30) {
    let result = a1 + a2 + a3 ;
    console.log("your result is " + result);
}

// calling function without default values

subtract1(40, 20 , 10);

// calling function with default values

subtract2(20,);
// function example defined without return 

function subtract3(a1, a2) {
    let result = a1 + a2 ;
    console.log("your result is " + result);
} console.log(subtract3(2,2));

// function example defined with return 

function subtract4(a1, a2) {
    let result = a1 + a2 ;
   return result
} console.log(subtract4(4,2));


// function expression simple 
let addition = function(x,y,z){
    let sum = x+y+z;
    return sum;
}
console.log("function experssion example " + addition(4,5,6));

// arrow function in one line

let addition2 = (input1, input2) => input1 - input2;
console.log(addition2(50, 30));

// arrow function in more than one line

let addition3 = (input1, input2) => {
    let result = input1 - input2
    return result
};
console.log(addition3(40,30));

// local function 

let result332 = 39; //global scope element

let addition5 = function(x,y,z){
    let sum1 = x+y+z; 
    console.log("local function variable within " + sum1) 
    console.log("global scope function within function " + result332)
    return sum1;
}
addition5(5,6,7);


// global function
console.log("global function outside of function " + result332);

//console.log("local function variable outside of function " + sum1); // error of local scope

// function exampe 1
// function to calculate the sum of numbers from 1 to n

let calculatesum = (n) => {
    let sum = 0;

    // loop form 1 to n and add each number to sum
    for (let i = 1; i <= n; i++){
        sum += i
    }
    return sum;
} 

const result123 = calculatesum(10);
console.log("sum of numbers from 1 to 10 is " + result123);
console.log("sum of number form 1 to 100 is " + calculatesum(100));
console.log("sum of number form 1 to 100 is " + calculatesum(1000));

//function example 2
// function to count the number of even number in an array.

let countEvenNumber = (arr) => {
    let count = 0;
    for (let num of arr){
        if (num % 2 === 0 ) count++;
    }
    return count;
}

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("number of even numbers in the array are " , countEvenNumber(numbers3));
