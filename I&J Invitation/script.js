// Initialisation d'EmailJS avec votre clé publique
emailjs.init("Ul1l5HtG0OeG4OE5F"); // Remplacez par votre propre clé publique

// Formulaire de confirmation
const form = document.getElementById("rsvpForm");
const message = document.getElementById("message");

// Gérer la soumission du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;

  // Vérification que les champs ne sont pas vides
  if (nom && email) {
    // Affiche les valeurs dans la console pour déboguer
    console.log("Nom:", nom, "Email:", email);

    // Envoi du formulaire via EmailJS
    emailjs
      .send("3377", "template_232lxyv", {
        from_name: nom,
        to_name: "Ivan & Jeannette", // Vous pouvez personnaliser ce champ si besoin
        email: email,
        to_email: "2kets25@gmail.com", // L'adresse à laquelle vous voulez recevoir la confirmation
      })
      .then(
        function (response) {
          console.log("Success", response);
          message.textContent = `Merci ${nom}, votre présence a été confirmée !`;
          form.reset();
        },
        function (error) {
          console.error("Failed", error);
          message.textContent =
            "Il y a eu une erreur lors de l'envoi du message. Essayez à nouveau.";
        }
      );
  } else {
    message.textContent = "Veuillez remplir tous les champs.";
  }
});
