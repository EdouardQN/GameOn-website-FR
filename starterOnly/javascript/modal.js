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
const modalbgConfirm = document.querySelector(".bground-confirm");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");
const closeIconConfirm = document.querySelector(".close-confirm");
const confirmBtn = document.querySelector(".btn-confirm");
const emailInput = document.querySelector("#email");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Close event wth function 
closeIcon.addEventListener("click", close);
closeIconConfirm.addEventListener("click", sucess);

function close(){
  modalbg.style.display = "none";
}

function sucess(){
  modalbgConfirm.style.display = "none";
}

//Form confirm with "Fermer"
confirmBtn.addEventListener("click", confirm);

function confirm(){
  modalbgConfirm.style.display = "none";
}

//Email check 

for(let index = 0; index < formData.length; index++) {

  const element = formData[index].value;
  
  if(element === emailInput.value){
    console.log("I m here m");
  }
  
}

