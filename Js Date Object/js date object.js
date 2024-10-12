 // date objects

 const todayDate1 = new Date();

const birthdayDate = new Date("09 Jan 2000 23:55:00");
const birthdayDate1 = new Date(2001, 5, 28, 23, 45, 0, 0);
const date = new Date(-550500005000);
console.log("Birthday of my father was " + date);

// get methods

const d1 = new Date()
d1.getFullYear()
let currentMonth = d1.getMonth() + 1
let currentDay = d1.getDay() + 1
let currentHour = d1.getHours()
console.log(currentMonth)
console.log(currentDay)
console.log(currentHour)
const d2 = new Date().getMonth();
console.log(d2);

// UTC 

const currentUTCHour = d1.getUTCHours()
console.log(currentUTCHour)

 // set time

const pastDate = d1.setFullYear(1988 , 3, 4);
 const pastHour = d1.setHours(15);
console.log(d1)
 console.log(pastHour)