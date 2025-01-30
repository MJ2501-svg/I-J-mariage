function afficherSection(id) {
  // Cacher toutes les sections
  let sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Afficher la section sélectionnée
  document.getElementById(id).classList.add("active");
}

// Afficher "Accueil" au chargement
document.addEventListener("DOMContentLoaded", function () {
  afficherSection("accueil");
});
