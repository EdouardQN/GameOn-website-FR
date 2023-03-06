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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Close event (croix)
closeBtn.addEventListener("click", close);

function close(){
  modalbg.style.display = "none";
}

//verification entrées utilisateur
function validate(){

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

  //Message d'erreur si remplissage faux
  const errorData = function (message){
    formData[i].setAttribute("data-error-visible", "true");
    formData[i].setAttribute("data-error", message);
    
  }

  let validity = true;

  for (i=0; i <= formData.length; i++){
    
    if (formData[i] === formData[0]){

      if (prenom === "" || prenom.length < 2)                                  
      { 
        errorData("Votre prénom doit contenir au moins 2 lettres");
        validity = false;
      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[1]){

      if (nom === "" || nom.length < 2)                                  
      { 
        errorData("Votre nom doit contenir au moins 2 lettres");
        validity = false;
      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[2]){

      if (mail === ""){

        errorData("Votre adresse mail doit être renseignée");
        validity = false;

      }
      else if (!(mail.match(emailRegex))){
        errorData("Votre adresse mail est invalide");
        validity = false;
      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

    if (formData[i] === formData[3]){
      if (dateNaissance === ""){
        errorData("Votre date de naissance n'est pas renseignée")
        validity = false;
      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
    }



    if (formData[i] === formData[4]){
      if (isNaN(tournoisInt)){
        errorData("Vous devez saisir un nombre");
        validity = false;
      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
     }

    if (formData[i] === formData[6]){

      if(conditionsUser === false){
        errorData("Vous devez lire et accepter les conditions d'utilisation");
        validity = false; 

      }
      else{
        formData[i].setAttribute("data-error-visible", "false");
      }
    }

  }
  return validity;

}