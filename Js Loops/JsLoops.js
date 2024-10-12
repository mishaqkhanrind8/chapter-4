 // for loop 

 // increment example 
 let loopx = 20;
 for (loopx =20; loopx<= 30; loopx++){
    console.log("iteration done and value of loopx is now " + loopx)
 };

 //decrement example
 for (let loopy =20; loopy>= 15; loopy--){
    console.log("iteration done and value of loopx is now " + loopy)
 };

 // for of loop example

 let brothers = ["ismail" , "ishaq" , "yaqub"];

 for(let baloch of brothers){
   console.log(baloch)
 };

 // for in loops example

 let baloch = {
person1:"ismail khan",
person2: "ishaq khan", 
person3: "yaqub khan",
}

for (let key in baloch) {
   console.log(key + " : " + baloch[key])
};

let minus = "0123456789"; 

for(let red of minus){
   console.log(red)
};

const accessories = {
   'mobile phones' : {
     'first phone': "qmobile",
      'second phone': "iphone",
   }, 
   firstname: "ishaq",
   lastname: "khan",
   fullname: function () { alert (this.firstname + " " + this.lastname)
   },
};

for(let key in accessories) {
   console.log(key + " : " + accessories[key])
};

// third example

const myobj = {
   name: "ishaq",
age : 30,
cars: { 
   car1: "ford",
   car2: "BMW",
   car3: "fiat"
},
meal: "rice",
phone: +923021905493,
}

for(let khan in myobj) {
   console.log(khan + " : " + myobj[khan])
};

// for of exampe 

let complexFlat = [1, 2, [3, 4, [ 5, 5, [ 7, 8] ,9 ,10 ] ,11 ,12 ] ,13 ,14 ];

for (let number of complexFlat) {
   console.log(number)
};

// while loop example

let i = 1;
while(i < 10)
{
   console.log("while loop " + i)
   i++;
};

// do while loop example

do {
   console.log("do while loop " + i)
   i++;
} 
while(i < 10)
   