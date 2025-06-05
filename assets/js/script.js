document.addEventListener("DOMContentLoaded", () => {
  // === Newsletter : message de confirmation
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre inscription à la newsletter !");
      newsletterForm.reset();
    });
  }

  // === Formulaire de contact : confirmation d’envoi
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Votre message a bien été envoyé. Nous vous répondrons rapidement !");
      contactForm.reset();
    });
  }

  // === Mode sombre persistant
  const toggleBtn = document.querySelector("#darkToggle");
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
  }

  // === Tilt sur les cartes de service
  const tiltCards = document.querySelectorAll(".service-card");
  if (tiltCards.length > 0 && window.VanillaTilt) {
    VanillaTilt.init(tiltCards, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }

  // === Apparition des éléments au scroll
  animateOnScroll();
});

function animateOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
