let checkoutCart = JSON.parse(localStorage.getItem("superpc_cart")) || [];

function renderCheckout() {
  const container = document.getElementById("checkout-items");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const totalEl = document.getElementById("checkout-total");
  const shippingEl = document.getElementById("checkout-shipping");

  if (checkoutCart.length === 0) {
    container.innerHTML = '<p class="cart-empty">No ha seleccionado ningun producto</p>';
    subtotalEl.textContent = "$0";
    totalEl.textContent = "$0";
    shippingEl.textContent = "$0";
    document.getElementById("cart-count").textContent = "0";
    return;
  }

  const subtotal = checkoutCart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = subtotal >= 200 ? 0 : 15;
  const discount = calcDiscount(subtotal);
  const total = subtotal + shipping - discount;

  container.innerHTML = checkoutCart.map(c => `
    <div class="checkout-item">
      <img src="${c.image}" alt="${c.name}">
      <div class="checkout-item-info">
        <h4>${c.name}</h4>
        <p class="checkout-specs">${c.specs}</p>
        <p class="checkout-price">$${c.price} x ${c.qty} = <strong>$${c.price * c.qty}</strong></p>
      </div>
      <button class="cart-item-remove" data-id="${c.id}">Eliminar</button>
    </div>
  `).join("");

  container.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      checkoutCart = checkoutCart.filter(c => c.id !== id);
      localStorage.setItem("superpc_cart", JSON.stringify(checkoutCart));
      renderCheckout();
      updateHeaderCount();
    });
  });

  subtotalEl.textContent = `$${subtotal}`;
  shippingEl.textContent = shipping === 0 ? "Gratis" : `$${shipping}`;
  const discountEl = document.getElementById("checkout-discount");
  if (discount > 0) {
    discountEl.parentElement.style.display = "flex";
    discountEl.textContent = `-$${discount}`;
  } else {
    discountEl.parentElement.style.display = "none";
  }
  totalEl.textContent = `$${total}`;
  document.getElementById("cart-count").textContent = checkoutCart.reduce((s, c) => s + c.qty, 0);
}

function calcDiscount(subtotal) {
  const code = document.getElementById("coupon-code")?.value?.trim().toLowerCase();
  if (code === "super10") return Math.round(subtotal * 0.1);
  return 0;
}

function updateHeaderCount() {
  document.getElementById("cart-count").textContent = checkoutCart.reduce((s, c) => s + c.qty, 0);
}

// Sync cart from localStorage on load
if (window.location.pathname.includes("carrito")) {
  checkoutCart = JSON.parse(localStorage.getItem("superpc_cart")) || [];
  renderCheckout();
}

document.getElementById("apply-coupon")?.addEventListener("click", renderCheckout);
document.getElementById("coupon-code")?.addEventListener("keyup", (e) => {
  if (e.key === "Enter") renderCheckout();
});

document.getElementById("checkout-btn")?.addEventListener("click", () => {
  if (checkoutCart.length === 0) return;
  document.querySelector(".checkout-steps .step:nth-child(2)").classList.add("active");
  document.querySelector(".checkout-steps .step:nth-child(1)").classList.remove("active");
  document.querySelector(".checkout-steps .step:nth-child(1)").classList.add("done");
  document.querySelector(".checkout-layout").style.display = "none";
  document.getElementById("payment-section").style.display = "block";
});

document.getElementById("back-to-cart")?.addEventListener("click", () => {
  document.querySelector(".checkout-steps .step:nth-child(1)").classList.add("active");
  document.querySelector(".checkout-steps .step:nth-child(2)").classList.remove("active");
  document.querySelector(".checkout-steps .step:nth-child(1)").classList.remove("done");
  document.querySelector(".checkout-layout").style.display = "flex";
  document.getElementById("payment-section").style.display = "none";
});

document.getElementById("confirm-btn")?.addEventListener("click", () => {
  document.querySelector(".checkout-steps .step:nth-child(2)").classList.remove("active");
  document.querySelector(".checkout-steps .step:nth-child(2)").classList.add("done");
  document.querySelector(".checkout-steps .step:nth-child(3)").classList.add("active");
  document.getElementById("payment-section").style.display = "none";
  document.getElementById("confirmation-section").style.display = "block";
  localStorage.removeItem("superpc_cart");
});

document.getElementById("cart-btn-header")?.addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("show");
});

// Cart sidebar listeners
document.getElementById("cart-close").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("show");
});
document.getElementById("cart-overlay").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("show");
});
document.getElementById("cart-clear").addEventListener("click", () => {
  checkoutCart = [];
  localStorage.setItem("superpc_cart", JSON.stringify(checkoutCart));
  renderCheckout();
});
