function burgermenu(){
    const shown = document.querySelector('.sidebar')
    shown.style.display = 'flex'
}
function quittemenu(){
    const shown = document.querySelector('.sidebar')
    shown.style.display = 'none'
}
const questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


function validerFormulaire() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var cin = document.getElementById("cin").value;
  var email = document.getElementById("email").value;
  var telephone = document.getElementById("telephone").value;


  var regexNomPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
  var regexCIN = /^[A-Za-z]{0,2}\d+$/;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var regexTelephone = /^[0-9]{10}$/;

  if (!regexNomPrenom.test(nom)) {
    alert("Le nom n'est pas valide. Veuillez utiliser des lettres et des espaces.");
    return ;
  }

  if (!regexNomPrenom.test(prenom)) {
    alert("Le prénom n'est pas valide. Veuillez utiliser des lettres et des espaces.");
    return ;
  }

  if (!regexCIN.test(cin)) {
    alert("Le numéro de CIN n'est pas valide.");
    return ;
  }

  if (!regexEmail.test(email)) {
    alert("L'adresse e-mail n'est pas valide. Veuillez entrer une adresse e-mail valide.");
    return ;
  }

  if (!regexTelephone.test(telephone)) {
    alert("Le numéro de téléphone n'est pas valide. Il doit comporter 10 chiffres.");
    return ;
  }

  alert("Inscription réussie !");
  return ;
}

