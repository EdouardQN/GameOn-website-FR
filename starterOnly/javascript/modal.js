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
const croixBtn = document.querySelector(".close");
const formBtn = document.querySelector(".button");
const closeC = document.querySelector(".close-confirm");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close event (croix)
croixBtn.addEventListener("click", close);
closeC.addEventListener("click", closeConfirm);

function close() {
  modalbg.style.display = "none";
}

function closeConfirm() {
  modalbgConfirm.style.display = "none";
}
//verification entrées utilisateur
let validity = false;

//récupération booléen validate()
let validBool = validity;
const clickValid = function(validBool){

  return validBool;
};
// clickValid(validity);

//Message d'erreur si remplissage faux
const errorData = function (message) {
  formData[i].setAttribute("data-error-visible", "true");
  formData[i].setAttribute("data-error", message);
  modalbgConfirm.style.display = "none";
  

}
let prenom;
 
function validate() {
console.log("je suis dans validate");


//récupération des données utilisateurs
prenom = document.getElementById("first").value;
const nom = document.getElementById("last").value;
const mail = document.getElementById("email").value;
// Regex pour l'adresse mail, gm indique une vérification globale
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', "gm");
const dateNaissance = document.getElementById("birthdate").value;
const nbrTournois = document.getElementById("quantity").value;
const tournoisInt = parseInt(nbrTournois);
const conditionsUser = document.getElementById("checkbox1").checked;

  validity = true;
  modalbgConfirm.style.display = "flex";

  for (i = 0; i <= formData.length; i++) {

    if (formData[i] === formData[0]) {

      if (prenom === "" || prenom.length < 2) {
        errorData("Votre prénom doit contenir au moins 2 lettres");
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[1]) {

      if (nom === "" || nom.length < 2) {
        errorData("Votre nom doit contenir au moins 2 lettres");
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[2]) {

      if (mail === "") {

        errorData("Votre adresse mail doit être renseignée");
        validity = false;

      }
      else if (!(mail.match(emailRegex))) {
        errorData("Votre adresse mail est invalide");
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[3]) {
      if (dateNaissance === "") {
        errorData("Votre date de naissance n'est pas renseignée")
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }



    if (formData[i] === formData[4]) {
      if (isNaN(tournoisInt)) {
        errorData("Vous devez saisir un nombre");
        validity = false;
      }
      else if(tournoisInt < 0 || tournoisInt > 99){
        errorData("Vous devez saisir un nombre entre 0 et 99");
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[6]) {

      if (conditionsUser === false) {
        errorData("Vous devez lire et accepter les conditions d'utilisation");
        validity = false;

      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

  }
  if (validity === true) {
    clickValid(validity);
    console.log("true saved");
    document.getElementById("form").submit();
    // modalbgConfirm.classList.add('confirm-active');
  }
  else{
    console.log("validity est false");
  }
  

  return validity;

}

// sessionStorage.setItem('display', 'flex');
// sessionStorage.setItem('validity', true);
// let validStorage = sessionStorage.getItem('validity');
// let flex = sessionStorage.getItem('display');
// console.log(flex);
// console.log(validStorage);

//Form confirm (buttons)
formBtn.addEventListener("click", validateConfirm);

function validateConfirm() {

  //clickValid(validity);
  if (validBool === true) {
    modalbgConfirm.classList.add('confirm-active');
    
  }
  else{
    console.log ("erreur");
    // modalbgConfirm.classList.remove('confirm-active');


  }
//autre méthode récupère valeurs champ dans un booléen var valid =false, valid === validate()

// console.log (clickValid());
  //  if (clickValid(validity) === true) {
  //    validStorage = true;
  //   console.log(validStorage);
  //   flex = "flex";
    
  // }
  // else{
  //   validStorage = false;
  //   console.log("non flex");
  //   console.log(validStorage);


  // }

}

// console.log(clickValid(validity));

// console.log(flex);
// console.log(validStorage);




