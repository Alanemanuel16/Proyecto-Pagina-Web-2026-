const products = [
  // ─── Gabinetes ───
  { id: 1,  name: "Corsair 4000D Airflow",         category: "gabinete", brand: "Corsair",       price: 94,   specs: "Mid Tower, Vidrio Templado, ATX, Blanco" },
  { id: 2,  name: "NZXT H5 Flow",                  category: "gabinete", brand: "NZXT",          price: 109,  specs: "Mid Tower, Vidrio Templado, ATX, Negro" },
  { id: 3,  name: "Lian Li O11 Dynamic EVO",       category: "gabinete", brand: "Lian Li",       price: 169,  specs: "Mid Tower, Doble Cámara, ATX, Blanco" },
  { id: 4,  name: "Corsair iCUE 5000X RGB",        category: "gabinete", brand: "Corsair",       price: 189,  specs: "Mid Tower, Vidrio Templado, RGB, ATX" },
  { id: 5,  name: "Thermaltake View 71 TG",        category: "gabinete", brand: "Thermaltake",   price: 159,  specs: "Full Tower, 4mm Vidrio Templado, E-ATX" },
  // ─── Memorias RAM ───
  { id: 6,  name: "Corsair Vengeance DDR5-6000",   category: "ram",      brand: "Corsair",       price: 119,  specs: "32GB (2x16GB) DDR5-6000MHz CL36" },
  { id: 7,  name: "G.Skill Trident Z5 RGB",        category: "ram",      brand: "G.Skill",       price: 149,  specs: "32GB (2x16GB) DDR5-6400MHz CL32" },
  { id: 8,  name: "Kingston Fury Beast",           category: "ram",      brand: "Kingston",      price: 89,   specs: "16GB (2x8GB) DDR5-5600MHz CL40" },
  { id: 9,  name: "Corsair Dominator Platinum",    category: "ram",      brand: "Corsair",       price: 209,  specs: "32GB (2x16GB) DDR5-6800MHz CL38 RGB" },
  { id: 10, name: "HyperX Fury DDR4-3200",         category: "ram",      brand: "HyperX",        price: 69,   specs: "16GB (2x8GB) DDR4-3200MHz CL16" },
  // ─── Microprocesadores ───
  { id: 11, name: "AMD Ryzen 7 7800X3D",           category: "microprocesador", brand: "AMD",    price: 449,  specs: "8C/16T, 4.2GHz, 5.0GHz Turbo, AM5, 120W" },
  { id: 12, name: "Intel Core i7-14700K",          category: "microprocesador", brand: "Intel",  price: 419,  specs: "20C/28T, 3.4GHz, 5.6GHz Turbo, LGA1700" },
  { id: 13, name: "AMD Ryzen 5 7600",              category: "microprocesador", brand: "AMD",    price: 229,  specs: "6C/12T, 3.8GHz, 5.1GHz Turbo, AM5, 65W" },
  { id: 14, name: "Intel Core i5-14600K",          category: "microprocesador", brand: "Intel",  price: 319,  specs: "14C/20T, 3.5GHz, 5.3GHz Turbo, LGA1700" },
  // ─── Placas de Video ───
  { id: 15, name: "NVIDIA GeForce RTX 5090",       category: "gpu",      brand: "NVIDIA",        price: 1999, specs: "24GB GDDR7, 512-bit, 21760 CUDA Cores" },
  { id: 16, name: "AMD Radeon RX 9070 XT",         category: "gpu",      brand: "AMD",           price: 849,  specs: "16GB GDDR6, 256-bit, 4096 Stream Processors" },
  { id: 17, name: "NVIDIA GeForce RTX 5070 Ti",    category: "gpu",      brand: "NVIDIA",        price: 749,  specs: "16GB GDDR7, 256-bit, 8960 CUDA Cores" },
  { id: 18, name: "ASUS ROG Strix RTX 4070",       category: "gpu",      brand: "ASUS",          price: 599,  specs: "12GB GDDR6X, 192-bit, 5888 CUDA Cores" },
  { id: 19, name: "Gigabyte RTX 4060 Windforce",   category: "gpu",      brand: "Gigabyte",      price: 329,  specs: "8GB GDDR6, 128-bit, 3072 CUDA Cores" },
  // ─── Refrigeración ───
  { id: 20, name: "Corsair H150i Elite Capellix",  category: "refrigeracion", brand: "Corsair",  price: 179,  specs: "Líquida 360mm, RGB, Triple Ventilador PWM" },
  { id: 21, name: "NZXT Kraken X73 RGB",           category: "refrigeracion", brand: "NZXT",     price: 199,  specs: "Líquida 360mm, RGB, Pantalla LCD Personalizable" },
  { id: 22, name: "Cooler Master Hyper 212 Halo",  category: "refrigeracion", brand: "Cooler Master", price: 49, specs: "Aire, Torre Simple, 120mm PWM, ARGB" },
  { id: 23, name: "Thermaltake Toughliquid 360",   category: "refrigeracion", brand: "Thermaltake", price: 139, specs: "Líquida 360mm, ARGB, Triple Ventilador" },
  // ─── Almacenamiento SSD ───
  { id: 24, name: "Samsung 990 Pro",               category: "ssd",      brand: "Samsung",       price: 179,  specs: "2TB NVMe M.2 PCIe 4.0, 7450MB/s" },
  { id: 25, name: "WD Black SN850X",               category: "ssd",      brand: "WD",            price: 159,  specs: "1TB NVMe M.2 PCIe 4.0, 7300MB/s" },
  { id: 26, name: "Crucial P5 Plus",               category: "ssd",      brand: "Crucial",       price: 109,  specs: "1TB NVMe M.2 PCIe 4.0, 6600MB/s" },
  { id: 27, name: "Kingston NV2",                  category: "ssd",      brand: "Kingston",      price: 69,   specs: "1TB NVMe M.2 PCIe 4.0, 3500MB/s" },
  // ─── Motherboards ───
  { id: 28, name: "ASUS ROG Strix B650-A",         category: "motherboard", brand: "ASUS",       price: 249,  specs: "ATX, AM5, DDR5, PCIe 5.0, WiFi 6E" },
  { id: 29, name: "Gigabyte Z790 Aorus Elite",     category: "motherboard", brand: "Gigabyte",   price: 229,  specs: "ATX, LGA1700, DDR5, PCIe 5.0, WiFi 6E" },
  { id: 30, name: "MSI MAG B760 Tomahawk",         category: "motherboard", brand: "MSI",        price: 199,  specs: "ATX, LGA1700, DDR5, PCIe 4.0, 2.5GbE" },
  { id: 31, name: "ASUS TUF Gaming B650-Plus",     category: "motherboard", brand: "ASUS",       price: 179,  specs: "ATX, AM5, DDR5, PCIe 5.0, 2.5GbE" },
  // ─── Fuentes de Poder ───
  { id: 32, name: "Corsair RM850x",               category: "fuente",    brand: "Corsair",       price: 129,  specs: "850W, 80+ Gold, Modular, 135mm Silencioso" },
  { id: 33, name: "EVGA SuperNOVA 1000 G7",       category: "fuente",    brand: "EVGA",          price: 179,  specs: "1000W, 80+ Gold, Modular, Fully" },
  { id: 34, name: "Seasonic Focus GX-750",         category: "fuente",    brand: "Seasonic",     price: 109,  specs: "750W, 80+ Gold, Modular, Compacta" },
  { id: 35, name: "Thermaltake Toughpower GF3",   category: "fuente",    brand: "Thermaltake",   price: 149,  specs: "850W, 80+ Gold, ATX 3.0, PCIe 5.0" },
];

const catPlaceholders = {
  gabinete:        ["0d9488","ffffff"],
  ram:             ["7c3aed","ffffff"],
  microprocesador: ["eab308","000000"],
  gpu:             ["dc2626","ffffff"],
  refrigeracion:   ["0891b2","ffffff"],
  ssd:             ["0369a1","ffffff"],
  motherboard:     ["0f766e","ffffff"],
  fuente:          ["a16207","ffffff"],
};

products.forEach(p => {
  const [bg, fg] = catPlaceholders[p.category] || ["1e3a8a","ffffff"];
  const short = p.name.length > 20 ? p.name.slice(0,18)+".." : p.name;
  p.image = `https://placehold.co/300x200/${bg}/${fg}?text=${encodeURIComponent(short)}`;
});

const menuCategories = [
  { key: "gabinete",        label: "Gabinetes" },
  { key: "ram",             label: "Memorias RAM" },
  { key: "microprocesador", label: "Microprocesadores" },
  { key: "gpu",             label: "Placas de Video" },
  { key: "refrigeracion",   label: "Refrigeración" },
  { key: "ssd",             label: "Almacenamiento" },
  { key: "motherboard",     label: "Motherboards" },
  { key: "fuente",          label: "Fuentes de poder" },
];

const brandsByCategory = {};
products.forEach(p => {
  if (!brandsByCategory[p.category]) brandsByCategory[p.category] = new Set();
  brandsByCategory[p.category].add(p.brand);
});
Object.keys(brandsByCategory).forEach(k => {
  brandsByCategory[k] = [...brandsByCategory[k]].sort();
});

const subCategories = {
  ram: [
    { label: "DDR5", cat: "ram", filter: p => p.specs.includes("DDR5") },
    { label: "DDR4", cat: "ram", filter: p => p.specs.includes("DDR4") },
  ],
  microprocesador: [
    { label: "AMD", cat: "microprocesador", filter: p => p.brand === "AMD" },
    { label: "Intel", cat: "microprocesador", filter: p => p.brand === "Intel" },
  ],
};
