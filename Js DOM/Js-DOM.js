  // DOM exmaple 

  //get by id
  let uniqueElement = document.getElementById("myId"); 
  console.log(uniqueElement);

  // get by class
let sameClass = document.getElementsByClassName("myClass");
console.log(sameClass);

// get by tag name
let tag = document.getElementsByTagName("h2");
console.log(tag);

// get by query for single element
let querySingle = document.querySelector(".myClass");
console.log(querySingle);

// get by query for all
let queryAll = document.querySelectorAll("p");
console.log(queryAll);

// DOM manipulation

// textcontent
let textofuniqueElement = uniqueElement.textContent;
console.log(textofuniqueElement);
 //uniqueElement.textContent = "Blank space"
 //console.log(uniqueElement);

 //innerHTML

 let innerHtml = querySingle.innerHTML;
 console.log(innerHtml);
 //querySingle.innerHTML = "Smash Code";
 //console.log(querySingle);

 //get attribute
 
 let attributes = querySingle.getAttribute("class");
 console.log(attributes);
querySingle.setAttribute("id", "Smash" );

let attributes1 = querySingle.getAttribute("id");
console.log(attributes1);

querySingle.style.backgroundColor = "green"; 

// Event Handling

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = "Dear Customer!  &nbsp  &nbsp  &nbsp  &nbsp The proccess will be done in next 24 hours. PLease wait while your payment wil claimed to you!";
}

let button = document.getElementById("myBtn");
button.addEventListener("click", function(){
  console.log("Good Job! You are Lucky-Man")
  button.style.backgroundColor = "lightBlue"
})
