const car = {'car name':"fiat", 'car model': "2024", 'car weight': "850kg", 'car color': "white"}
const persons = {
    first : "muhammad",
    last : "ishaq",
    age : 23, 
    student : true,
};
const address = {
    'building number': 3960,
    street: 'north 1st street',
    country : 'Pakistan'
};

persons. first = 'ishaq';
 const person = {
    name: "ishaq khan ",
    job: "developer",
    'full adress': "kahror pacca pakistan"
 };
 person.age = 25;
console.log("changed person object age is " +person["age"]);

 delete person.age; //it well delet age property form property.
console.log("person age is " + person.age);
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
 };
 console.log("nseted object car1 name is " + myobj.cars.car1); //access with dot notation

 console.log("nseted object car1 name is " + myobj.cars["car1"]); //access with array method

console.log("person object location " + person["full adress"] ); //access with array-like method

person.favcol = "black";
console.log("person object favorite color is " + person.favcol );  
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
console.log("access if word has spacing between " + accessories["mobile phones"]["second phone"])
accessories.fullname();