// debugging method example

const array1 =  [2, 5, 9];

let index51 = array1.findIndex(x => x == 5); 
//debugger
console.log(index51);
index51++
//debugger
console.log(index51); // 1

// try and catch method

try{
    let x32 = finalResult + 45;
console.log(x32);
}catch(error){
    console.error("this is my error ", error);
}
