document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const image = button.dataset.image;

      const item = { name, price, image };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      showNotification(`${name} a été ajouté au panier.`);
    });
  });
});
function showNotification(message) {
  const container = document.getElementById("notification-container");
  const notif = document.createElement("div");

  notif.className = "alert alert-success alert-dismissible fade show";
  notif.role = "alert";
  notif.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  container.appendChild(notif);

  // Auto-disparition après 3 secondes
  setTimeout(() => {
    notif.classList.remove("show");
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}
