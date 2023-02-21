function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const emailInput = document.querySelector("#email");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Close event wth function
closeBtn.addEventListener("click", close);

function close(){
  modalbg.style.display = "none";
}


//Email check 

for(let index = 0; index < formData.length; index++) {

  const element = formData[index].value;
  
  if(element === emailInput.value){
    console.log("I m here m");
  }
  
}
// console.log(emailInput.value);


//validation
function validate(){
  console.log("Form done :)");
}