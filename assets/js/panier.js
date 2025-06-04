document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      cartTotal.textContent = "";
      return;
    }

    let total = 0;

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("card", "mb-3", "p-3");

      itemDiv.innerHTML = `
        <div class="row g-3 align-items-center">
          <div class="col-md-2">
            <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
          </div>
          <div class="col-md-7">
            <h5>${item.name}</h5>
            <p class="mb-1 fw-medium">${parseFloat(item.price).toFixed(2)} €</p>
          </div>
          <div class="col-md-3 text-end">
            <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Supprimer</button>
          </div>
        </div>
      `;

      cartContainer.appendChild(itemDiv);
      total += parseFloat(item.price);
    });

    cartTotal.textContent = `Total : ${total.toFixed(2)} €`;
  }

  // Supprimer un article
  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  renderCart();
});
