let cart = JSON.parse(localStorage.getItem("superpc_cart")) || [];

function saveCart() {
  localStorage.setItem("superpc_cart", JSON.stringify(cart));
}

function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("show");
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("show");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  document.getElementById("cart-count").textContent = count;

  const container = document.getElementById("cart-items");
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">El carrito está vacío</p>';
  } else {
    container.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img src="${c.image}" alt="${c.name}">
        <div class="cart-item-info">
          <h4>${c.name}</h4>
          <p>$${c.price} x${c.qty}</p>
        </div>
        <button class="cart-item-remove" data-id="${c.id}">Eliminar</button>
      </div>
    `).join("");
    container.innerHTML += `<div class="cart-footer-links"><a href="carrito.html" class="checkout-link">Ir a pagar</a></div>`;
    container.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
    });
  }

  document.getElementById("cart-total").textContent = `$${total}`;

  document.querySelectorAll(".add-btn").forEach(btn => {
    const id = Number(btn.dataset.id);
    const inCart = cart.some(c => c.id === id);
    btn.textContent = inCart ? "✓ En el carrito" : "Agregar al carrito";
    btn.classList.toggle("in-cart", inCart);
  });
}

document.querySelectorAll(".dropbtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = btn.closest(".dropdown");
    dropdown.classList.toggle("open");
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown.open").forEach(d => d.classList.remove("open"));
});

document.getElementById("cart-btn")?.addEventListener("click", openCart);
document.getElementById("cart-close")?.addEventListener("click", closeCart);
document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
document.getElementById("cart-clear")?.addEventListener("click", clearCart);

updateCartUI();
