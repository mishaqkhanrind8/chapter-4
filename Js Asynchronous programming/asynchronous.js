// synchronous
let userName = prompt("What is your name?");
let gender = prompt("What is your Gender?");
alert("your name is " + userName + " and your Gender is " + gender);

//asynchronous
console.log("start with this line");
function test23 () {
    setTimeout(() => {
console.log("this is second line (after 5 secnods) ")
    }, 5000) 
}
test23()
console.log("end with this line");

// callback function

function test24 (callback) {
setTimeout(( ) => {
    const data = {userName: "Muhammad ishaq", age: 23};
    console.log("this messages will shown after 6 seconds")
    callback(data)
}, 7000)
}

test24((data) => {
     console.log(data)});

//promise

function myData () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const data3 = {userName: "ishaq khan" , age: 20}
            if(data3.age > 21) {
                resolve("age is greater than 21 ")
            } else {
                reject("age is not greater than 21 ")
            }
        }, 7000)
    } )
}

myData()
.then((age) => console.log("age " , age))
.catch((error) => console.log("this is catch error 2", error ));

async function test25 () {
    console.log(test25)
}
test25().then()