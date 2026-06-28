const SUPABASE_URL = "https://snrqejlyhrhvtlovzbex.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hCxZUCF36pDHxpF-6f9MUg_Fo7_h4_V";
const TABLE_NAME = "Products";

const form = document.getElementById("product-form");
const messageEl = document.getElementById("message");

const categories = [
  { key: "gabinete",        label: "Gabinetes" },
  { key: "ram",             label: "Memorias RAM" },
  { key: "microprocesador", label: "Microprocesadores" },
  { key: "gpu",             label: "Placas de Video" },
  { key: "refrigeracion",   label: "Refrigeración" },
  { key: "ssd",             label: "Almacenamiento SSD" },
  { key: "motherboard",     label: "Motherboards" },
  { key: "fuente",          label: "Fuentes de Poder" },
  { key: "monitor",         label: "Monitores Gaming" },
];

const categorySelect = document.getElementById("category");
categories.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.key;
  opt.textContent = c.label;
  categorySelect.appendChild(opt);
});

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = type;
}

async function insertProduct(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Prefer": "return=minimal",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Error ${res.status}: ${errBody}`);
  }

  return res;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Insertando...";

  const product = {
    name: document.getElementById("name").value.trim(),
    category: document.getElementById("category").value,
    brand: document.getElementById("brand").value.trim(),
    price: Number(document.getElementById("price").value),
    speces: document.getElementById("specs").value.trim(),
    image: document.getElementById("image").value.trim() || null,
  };

  if (!product.name || !product.category || !product.brand || !product.price || !product.speces) {
    showMessage("Completá todos los campos obligatorios.", "error");
    submitBtn.disabled = false;
    submitBtn.textContent = "Insertar Producto";
    return;
  }

  try {
    await insertProduct(product);
    showMessage(`"${product.name}" insertado correctamente.`, "success");
    form.reset();
    categorySelect.selectedIndex = 0;
  } catch (err) {
    showMessage(`Error al insertar: ${err.message}`, "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Insertar Producto";
  }
});
