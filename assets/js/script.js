
// JS de base pour interactions simples

// Message de confirmation de newsletter
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre inscription à la newsletter !");
      newsletterForm.reset();
    });
  }

  // Formulaire de contact - alerte de confirmation
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Votre message a bien été envoyé. Nous vous répondrons rapidement !");
      contactForm.reset();
    });
  }
});
// Apparition des éléments au scroll
const reveals = document.querySelectorAll(".reveal");

function animateOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);



