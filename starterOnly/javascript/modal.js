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
let validity = true;


console.log(modalbgConfirm.style.visibility);
console.log(modalbgConfirm.style.display);


//Message d'erreur si remplissage faux
const errorData = function (message) {
  formData[i].setAttribute("data-error-visible", "true");
  formData[i].setAttribute("data-error", message);
  modalbgConfirm.style.display = "none";
  

}
 
function validate() {
console.log("je suis dans validate");
console.log(modalbgConfirm.style.visibility);

//récupération des données utilisateurs
const prenom = document.getElementById("first").value;
const nom = document.getElementById("last").value;
const mail = document.getElementById("email").value;
// Regex pour l'adresse mail, gm indique une vérification globale
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', "gm");
const dateNaissance = document.getElementById("birthdate").value;
const nbrTournois = document.getElementById("quantity").value;
const tournoisInt = parseInt(nbrTournois);
const conditionsUser = document.getElementById("checkbox1").checked;


  for (i = 0; i <= formData.length; i++) {

    if (i === 0) {

      if (prenom === "" || prenom.length < 2) {
        errorData("Votre prénom doit contenir au moins 2 lettres");
        validity = false;

      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (i === 1) {

      if (nom === "" || nom.length < 2) {
        errorData("Votre nom doit contenir au moins 2 lettres");
        validity = false;

      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }


    if (i === 2) {

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


    if (i === 3) {
      if (dateNaissance === "") {
        errorData("Votre date de naissance n'est pas renseignée")
        validity = false;
      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }




    if (i === 4) {
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


    if (i === 6) {

      if (conditionsUser === false) {
        errorData("Vous devez lire et accepter les conditions d'utilisation");
        validity = false;

      }
      else {
        formData[i].setAttribute("data-error-visible", "false");
      }
    }


  }

  if (validity) {

    console.log("true saved");

    modalbgConfirm.style.visibility = "visible";
    // modalbgConfirm.classList.add('confirm-active');
  }
  else{
    console.log("validity est false");
  }
  console.log(modalbgConfirm.style.visibility);

  return validity;

}


//Form confirm (buttons)
formBtn.addEventListener("click", validateConfirm);

function validateConfirm() {


   


}




