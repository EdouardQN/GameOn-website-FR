// Modifie le layout pour le responsive
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
const btnC = document.querySelector(".btn-confirm");

//Validation form bouton
formBtn.addEventListener("click", function (event){
 
  // validate();
  const validity = validate();
  //prevent l'envoie du formulaire pour pouvoir rendre visible la confirmation
  event.preventDefault(); 
  console.log(validity);
  if(validity){
    modalbg.style.display = "none";
    modalbgConfirm.style.display = "flex";
  }
});

btnC.addEventListener("click", function(){
  modalbgConfirm.style.display = "none";
  //je submit seulement après avoir cliquer sur fermer 
  // form.submit();

});


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



//Message d'erreur si remplissage faux (formulaire)
const errorData = function (i, message) {
  formData[i].setAttribute("data-error-visible", "true");
  formData[i].setAttribute("data-error", message);
  modalbgConfirm.style.display = "none";


}



function validate() {
  //verification entrées utilisateur
  let validity = true;
  console.log("je suis dans validate");

  // récupération des données utilisateurs
  const prenom = document.getElementById("first").value;
  const nom = document.getElementById("last").value;
  const mail = document.getElementById("email").value;
  // Regex pour l'adresse mail, gm indique une vérification globale
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', "gm");
  const dateNaissance = document.getElementById("birthdate").value;
  const nbrTournois = document.getElementById("quantity").value;
  const tournoisInt = parseInt(nbrTournois);
  const conditionsUser = document.getElementById("checkbox1").checked;


  if (prenom === "" || prenom.length < 2) {
    errorData(0, "Votre prénom doit contenir au moins 2 lettres");
    validity = false;
  }
  else {
    formData[0].setAttribute("data-error-visible", "false");
    
  }


   if (nom === "" || nom.length < 2) {
    
     errorData(1, "Votre nom doit contenir au moins 2 lettres");
     validity = false;

   }
   else {
    formData[1].setAttribute("data-error-visible", "false");
    
   }


   if (mail === "") {

     errorData(2, "Votre adresse mail doit être renseignée");
     validity = false;

   }
   else if (!(mail.match(emailRegex))) {

     errorData(2, "Votre adresse mail est invalide");
     validity = false;
   }
   else {
     formData[2].setAttribute("data-error-visible", "false");
     
   }

   if (dateNaissance === "") {
     errorData(3, "Votre date de naissance n'est pas renseignée")
     validity = false;
   }
   else {
     formData[3].setAttribute("data-error-visible", "false");
   }

   if (isNaN(tournoisInt)) {
     errorData(4, "Vous devez saisir un nombre");
     validity = false;
   }
   else if (tournoisInt < 0 || tournoisInt > 99) {
     errorData("Vous devez saisir un nombre entre 0 et 99");
     validity = false;
   }
   else {
     formData[4].setAttribute("data-error-visible", "false");
   }


   if (conditionsUser === false) {
     errorData(6, "Vous devez lire et accepter les conditions d'utilisation");
     validity = false;

   }
   else {
     formData[6].setAttribute("data-error-visible", "false");
   }

  return validity;

}


// console.log(validity);
// console.log(modalbgConfirm.style.visibility);

