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
const validBtn = document.querySelector(".button-submit");
const confirmBtn = document.querySelector(".btn-confirm");
const emailInput = document.querySelector("#email");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Close event wth function (cancel)
closeIcon.addEventListener("click", close);
closeIconConfirm.addEventListener("click", sucess);

function close(){
  modalbg.style.display = "none";
}

function sucess(){
  modalbgConfirm.style.display = "none";
}

//Form confirm (buttons)
confirmBtn.addEventListener("click", confirm);
validBtn.addEventListener("click", val);

function val(){
  modalbg.style.display = "none";
  modalbgConfirm.style.display = "flex";
}

function confirm(){
  modalbgConfirm.style.display = "none";
}

