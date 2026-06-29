const container = document.getElementById("products-container");
const titleEl = document.getElementById("category-title");

const catLabels = {
  all: "Todos los Productos", gabinete: "Gabinetes", ram: "Memorias RAM",
  microprocesador: "Microprocesadores", gpu: "Placas de Video",
  refrigeracion: "Refrigeración", ssd: "Almacenamiento",
  motherboard: "Motherboards", fuente: "Fuentes de poder",
  monitor: "Monitores",
  nuestros: "Nuestros Productos"
};
const badgeLabels = {
  gpu: "GPU", ram: "RAM", ssd: "SSD", gabinete: "Gabinete",
  microprocesador: "CPU", refrigeracion: "Refrigeración",
  motherboard: "Motherboard", fuente: "Fuente", monitor: "Monitor"
};

let currentCat = "all";
let selectedBrands = new Set();
let selectedSub = null;

function getCategory() {
  const p = new URLSearchParams(window.location.search);
  return (p.get("cat") && catLabels[p.get("cat")]) ? p.get("cat") : "all";
}

function renderProducts() {
  let filtered = currentCat === "all"
    ? products
    : currentCat === "nuestros"
      ? products.filter(p => p.isFromSupabase)
      : products.filter(p => p.category === currentCat);

  if (selectedBrands.size > 0) {
    filtered = filtered.filter(p => selectedBrands.has(p.brand));
  }

  if (selectedSub) {
    filtered = filtered.filter(selectedSub.filter);
  }

  const from = parseFloat(document.getElementById("price-from")?.value);
  const to = parseFloat(document.getElementById("price-to")?.value);
  if (!isNaN(from)) filtered = filtered.filter(p => p.price >= from);
  if (!isNaN(to)) filtered = filtered.filter(p => p.price <= to);

  const catName = catLabels[currentCat] || "Productos";
  titleEl.textContent = catName;
  document.title = `Super PC's - ${catName}`;

  if (filtered.length === 0) {
    container.innerHTML = '<p class="cart-empty">No hay productos en esta categoría</p>';
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <span class="badge badge-${p.category}">${badgeLabels[p.category] || p.category}</span>
        <h3>${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <p class="price">$${p.price}</p>
        <button class="add-btn" data-id="${p.id}">Agregar al carrito</button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".add-btn").forEach(btn =>
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id))));
  if (typeof cart !== "undefined") updateCartUI();
}

function goToCategory(cat) {
  currentCat = cat;
  selectedBrands.clear();
  selectedSub = null;
  document.querySelectorAll(".brand-check:checked").forEach(c => c.checked = false);
  renderProducts();
  renderCategoriasSidebar();
  renderFiltros();
}

// ─── Sidebar: Categorías ───
function renderCategoriasSidebar() {
  const el = document.getElementById("sidebar-categorias");
  el.innerHTML = menuCategories.map(c => {
    const hasSub = subCategories[c.key] && subCategories[c.key].length > 0;
    return `
    <div class="cat-item">
      <button class="cat-btn ${currentCat === c.key && !selectedSub ? 'active' : ''}" data-cat="${c.key}">
        ${c.label} ${(brandsByCategory[c.key]?.length || hasSub) ? '▸' : ''}
      </button>
      <div class="brand-submenu" id="submenu-${c.key}">
        ${(subCategories[c.key] || []).map(s => {
          const isActive = selectedSub && selectedSub.label === s.label;
          return `<button class="brand-sub ${isActive ? 'active' : ''}" data-cat="${s.cat}" data-sub="${s.label}">${s.label}</button>`;
        }).join('')}
      </div>
    </div>
  `}).join('');

  el.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      goToCategory(btn.dataset.cat);
    });
  });
  el.querySelectorAll(".brand-sub").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      const subLabel = btn.dataset.sub;
      const subDef = (subCategories[cat] || []).find(s => s.label === subLabel);
      if (subDef) {
        goToCategory(cat);
        selectedSub = subDef;
        renderProducts();
        renderCategoriasSidebar();
      }
    });
  });
}

// ─── Sidebar: Filtros ───
function renderFiltros() {
  const el = document.getElementById("filtros-marcas");
  const brands = currentCat === "all"
    ? [...new Set(products.map(p => p.brand))].sort()
    : currentCat === "nuestros"
      ? [...new Set(products.filter(p => p.isFromSupabase).map(p => p.brand))].sort()
      : (brandsByCategory[currentCat] || []);
  el.innerHTML = brands.map(b => {
    const id = "cb-" + b.replace(/\s/g, '_');
    return `<label class="brand-filter-label">
      <input type="checkbox" class="brand-check" id="${id}" data-brand="${b}"
        ${selectedBrands.has(b) ? 'checked' : ''}> ${b}
    </label>`;
  }).join('');

  el.querySelectorAll(".brand-check").forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) selectedBrands.add(cb.dataset.brand);
      else selectedBrands.delete(cb.dataset.brand);
      renderProducts();
    });
  });
}

// ─── Sidebar toggles ───
document.querySelectorAll(".sidebar-toggle").forEach(tog => {
  tog.addEventListener("click", () => {
    const body = tog.nextElementSibling;
    body.classList.toggle("open");
    tog.textContent = body.classList.contains("open")
      ? tog.textContent.replace("▾", "▴")
      : tog.textContent.replace("▴", "▾");
  });
});

document.getElementById("search-btn")?.addEventListener("click", renderProducts);
document.getElementById("price-from")?.addEventListener("input", renderProducts);
document.getElementById("price-to")?.addEventListener("input", renderProducts);

// ─── Supabase ───
async function loadSupabaseProducts() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}?order=id.desc`, {
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (!res.ok) return;
    const data = await res.json();
    data.forEach(sp => {
      const newP = {
        id: 1000 + sp.id,
        name: sp.name,
        category: sp.category,
        brand: sp.brand,
        price: sp.price,
        specs: sp.speces || "",
        image: sp.image || null,
        isFromSupabase: true,
      };
      if (!newP.image) {
        const [bg, fg] = catPlaceholders[newP.category] || ["1e3a8a","ffffff"];
        const short = newP.name.length > 20 ? newP.name.slice(0,18)+".." : newP.name;
        newP.image = `https://placehold.co/300x200/${bg}/${fg}?text=${encodeURIComponent(short)}`;
      }
      products.push(newP);
    });
    Object.keys(brandsByCategory).forEach(k => delete brandsByCategory[k]);
    products.forEach(p => {
      if (!brandsByCategory[p.category]) brandsByCategory[p.category] = new Set();
      brandsByCategory[p.category].add(p.brand);
    });
    Object.keys(brandsByCategory).forEach(k => {
      brandsByCategory[k] = [...brandsByCategory[k]].sort();
    });
  } catch (_) {}
}

// ─── Init ───
(async () => {
  await loadSupabaseProducts();
  currentCat = getCategory();
  renderCategoriasSidebar();
  renderFiltros();
  renderProducts();
})();
