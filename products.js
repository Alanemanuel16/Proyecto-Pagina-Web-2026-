let products = [
  // ─── Gabinetes ───
  { id: 1,  name: "Gabinete Gamer Aureox Skoll Arx 200G", category: "gabinete", brand: "Aureox",       price: 40000,   specs: "Mid Tower, Vidrio Templado, ATX, Negro", image: "https://www.infinitonline.com.ar/thumb/NBARX200GSKOLL56599_400x400.png" },
  { id: 2,  name: "Gabinete Gamer Aureox Vanth Arx 205G", category: "gabinete", brand: "Aureox",       price: 30000,  specs: "Mid Tower, Vidrio Templado, ATX, Blanco", image: "https://www.infinitonline.com.ar/thumb/NBARX205GVANTH56599_400x400.png" },
  { id: 3,  name: "Gabinete Gamer Raidmax Vector V216",   category: "gabinete", brand: "Raidmax",      price: 48000,  specs: "Mid Tower, Vidrio Templado, RGB, ATX", image: "https://www.infinitonline.com.ar/thumb/000000NBV216TBS56605_400x400.png" },
  { id: 4,  name: "Gabinete Gamer Aureox Pictor Arx370G", category: "gabinete", brand: "Aureox",       price: 55000,  specs: "Mid Tower, Vidrio Templado, RGB, ATX", image: "https://www.infinitonline.com.ar/thumb/NBPICTORARX370G56598_400x400.jpg" },
  { id: 5,  name: "Gabinete Thermaltake View 170 TG",     category: "gabinete", brand: "Thermaltake",  price: 35000,  specs: "Mid Tower, Vidrio Templado, ARGB, ATX", image: "https://www.infinitonline.com.ar/thumb/NBCA-1Z4-00M1WN-0056621_400x400.jpg" },
  // ─── Memorias RAM ───
  { id: 6,  name: "Patriot Viper Venom DDR5 16GB 6000MHz", category: "ram",      brand: "Patriot",     price: 4000,  specs: "16GB DDR5-6000MHz CL36 Black", image: "https://www.infinitonline.com.ar/thumb/NBPVV516G600C36K04866_400x400.jpg" },
  { id: 7,  name: "Kingston Fury Beast DDR4 8GB 3200MHz",  category: "ram",      brand: "Kingston",    price: 3000,   specs: "8GB DDR4-3200MHz CL16", image: "https://www.infinitonline.com.ar/thumb/000000000000018382870Memoria-DDR4-8GB-3200-Kingston-FURY-BEAST-RGB_400x400.jpg" },
  { id: 8,  name: "Patriot DDR5 Viper Elite 5 16GB 6000", category: "ram",      brand: "Patriot",     price: 10000,  specs: "16GB DDR5-6000MHz CL36 Black", image: "https://www.infinitonline.com.ar/thumb/00NBVEU516G603656722_400x400.png" },
  { id: 9,  name: "G.Skill Trident Z DDR4 16GB 3600MHz",  category: "ram",      brand: "G.Skill",     price: 12000,  specs: "16GB (2x8GB) DDR4-3600MHz CL18 RGB", image: "https://www.infinitonline.com.ar/thumb/000000000000361700800nb-MEMORIA-GSKILL-TRIDENT-Z-RGB-PC4-16-GB-3600-2X8-28800-DDR4-C19-ver-aa05a256d78ad45afbe622a6cdb3fb8f_400x400.jpeg" },
  { id: 10, name: "Netac Shadow III DDR5 16GB 6000MHz",   category: "ram",      brand: "Netac",       price: 15000,   specs: "16GB DDR5-6000MHz CL38 Black", image: "https://www.infinitonline.com.ar/thumb/NBNTSHD5P60SP-16KC02467_400x400.jpg" },
  // ─── Microprocesadores ───
  { id: 11, name: "AMD Ryzen 7 7800X3D",                   category: "microprocesador", brand: "AMD",    price: 100000,  specs: "8C/16T, 4.2GHz, 5.0GHz Turbo, AM5, 120W", image: "https://www.infinitonline.com.ar/thumb/NB100-100000910WOF57141_400x400.jpg" },
  { id: 12, name: "Intel Core i7-14700K",                  category: "microprocesador", brand: "Intel",  price: 150000,  specs: "20C/28T, 3.4GHz, 5.6GHz Turbo, LGA1700", image: "https://www.infinitonline.com.ar/thumb/000000000000272881721i5-14400_400x400.jpg" },
  { id: 13, name: "AMD Ryzen 5 7600",                     category: "microprocesador", brand: "AMD",    price: 130000,  specs: "6C/12T, 3.8GHz, 5.1GHz Turbo, AM5, 65W", image: "https://www.infinitonline.com.ar/thumb/NB100-100001015BOX57141_400x400.jpg" },
  { id: 14, name: "Intel Core i5-14400F",                category: "microprocesador", brand: "Intel",  price: 125000,  specs: "10C/16T, 2.5GHz, 4.7GHz Turbo, LGA1700", image: "https://www.infinitonline.com.ar/thumb/000000000000272881721i5-14400_400x400.jpg" },
  // ─── Placas de Video ───
  { id: 15, name: "Gigabyte RTX 5050 WF2 OC 8GB",         category: "gpu",      brand: "Gigabyte",      price: 500000,  specs: "8GB GDDR7, 128-bit, HDMI/DP", image: "https://www.infinitonline.com.ar/thumb/NBGV-N5050WF2OC-8GD57094_400x400.png" },
  { id: 16, name: "ASUS Dual RTX 5060 OC 8GB",            category: "gpu",      brand: "ASUS",          price: 450000,  specs: "8GB GDDR7, 128-bit, OC Edition", image: "https://www.infinitonline.com.ar/thumb/NBDUAL-RTX5060-O8GEVO09247_400x400.jpg" },
  { id: 17, name: "Sapphire Pulse RX 7600 OC 8GB",        category: "gpu",      brand: "Sapphire",      price: 250000,  specs: "8GB GDDR6, 128-bit, RDNA 3", image: "https://www.infinitonline.com.ar/thumb/0NB11324-01-20G57111_400x400.jpg" },
  { id: 18, name: "Gigabyte RTX 4070 WF3 OC V2 12GB",     category: "gpu",      brand: "Gigabyte",      price: 550000,  specs: "12GB GDDR6X, 192-bit, 5888 CUDA Cores", image: "https://www.infinitonline.com.ar/thumb/0000000000002922580411000x1000-6_400x400.jpg" },
  { id: 19, name: "ASUS TUF RTX 5070 OC 12GB",            category: "gpu",      brand: "ASUS",          price: 600000,  specs: "12GB GDDR7, 192-bit, Gaming", image: "https://www.infinitonline.com.ar/thumb/NBTUF-RTX5070-O12G-GAMING57077_400x400.jpg" },
  // ─── Refrigeración ───
  { id: 20, name: "Water Cooler Asus Prime LC 360 ARGB",  category: "refrigeracion", brand: "ASUS",    price: 80000,  specs: "Líquida 360mm, ARGB, Triple Ventilador", image: "https://www.infinitonline.com.ar/thumb/NBPRIMELC360ARGB57241_400x400.jpg" },
  { id: 21, name: "Water Cooler Thermaltake LA360 ARGB",  category: "refrigeracion", brand: "Thermaltake", price: 75000, specs: "Líquida 360mm, RGB, All In One", image: "https://www.infinitonline.com.ar/thumb/NBCL-W459-PL12SW-A57267_400x400.jpg" },
  { id: 22, name: "Cooler Master Hyper 212 Spectrum V3",  category: "refrigeracion", brand: "Cooler Master", price: 85000, specs: "Aire, Torre Simple, 120mm PWM, RGB", image: "https://www.infinitonline.com.ar/thumb/NBRR-S4NA-17PA-R156473_400x400.png" },
  { id: 23, name: "Water Cooler Gigabyte Aorus WF II 360",category: "refrigeracion", brand: "Gigabyte", price: 90000, specs: "Líquida 360mm, ARGB, Display LCD", image: "https://www.infinitonline.com.ar/thumb/000000000000340265951Sin-titulo_400x400.png" },
  // ─── Almacenamiento SSD ───
  { id: 24, name: "Disco SSD WD Black SN7100 500GB NVMe", category: "ssd",      brand: "WD",            price: 120000,   specs: "500GB NVMe M.2 PCIe 4.0, 6900MB/s", image: "https://www.infinitonline.com.ar/thumb/00NBWDS500G4X0E56517_400x400.png" },
  { id: 25, name: "Disco SSD Patriot P300 512GB NVMe",    category: "ssd",      brand: "Patriot",       price: 90000,   specs: "512GB NVMe M.2 PCIe 3.0, 3300MB/s", image: "https://www.infinitonline.com.ar/thumb/0NBP300P512GM2856523_400x400.jpg" },
  { id: 26, name: "Disco SSD Adata SU650 1TB SATA",       category: "ssd",      brand: "Adata",         price: 100000,  specs: "1TB SATA III 2.5, 520MB/s", image: "https://www.infinitonline.com.ar/thumb/NBASU650SS-1TT-R56513_400x400.png" },
  { id: 27, name: "Disco SSD WD Green SN350 1TB NVMe",    category: "ssd",      brand: "WD",            price: 110000,   specs: "1TB NVMe M.2 PCIe 3.0, 2400MB/s", image: "https://www.infinitonline.com.ar/thumb/00NBWDS100T2G0C56515_400x400.jpg" },
  // ─── Motherboards ───
  { id: 28, name: "Gigabyte A520M K V2",             category: "motherboard", brand: "Gigabyte",   price: 40000,   specs: "mATX, AM4, DDR4, PCIe 3.0, HDMI/VGA", image: "https://www.infinitonline.com.ar/thumb/000000000000360707476MKT1037ATA-3_400x400.jpg" },
  { id: 29, name: "ASUS Prime A520M-K",               category: "motherboard", brand: "ASUS",       price: 50000,   specs: "mATX, AM4, DDR4, PCIe 3.0, M.2", image: "https://www.infinitonline.com.ar/thumb/NBPRIMEA520M-K56811_400x400.jpg" },
  { id: 30, name: "ASUS Prime H610M-F D4 R2.0",       category: "motherboard", brand: "ASUS",       price: 55000,  specs: "mATX, LGA1700, DDR4, PCIe 4.0, M.2", image: "https://www.infinitonline.com.ar/thumb/NBPRIMEH610M-FD4R2.056840_400x400.png" },
  { id: 31, name: "Gigabyte B550M K",                 category: "motherboard", brand: "Gigabyte",   price: 60000,  specs: "mATX, AM4, DDR4, PCIe 4.0, M.2", image: "https://www.infinitonline.com.ar/thumb/000000NBB550MK56847_400x400.png" },
  { id: 32, name: "ASUS Prime A620M-K",               category: "motherboard", brand: "ASUS",       price: 75000,  specs: "mATX, AM5, DDR5, PCIe 4.0, M.2", image: "https://www.infinitonline.com.ar/thumb/NBPRIMEA620M-K56815_400x400.jpg" },
  { id: 33, name: "Gigabyte B760M E",                 category: "motherboard", brand: "Gigabyte",   price: 80000,  specs: "mATX, LGA1700, DDR5, PCIe 4.0, M.2", image: "https://www.infinitonline.com.ar/thumb/000000NBB760ME56880_400x400.png" },
  { id: 34, name: "ASRock B550M Phantom Gaming 4",    category: "motherboard", brand: "ASRock",     price: 95000,  specs: "mATX, AM4, DDR4, PCIe 4.0, RGB", image: "https://www.infinitonline.com.ar/thumb/NBB550MPHANTOMGAMING456785_400x400.jpg" },
  { id: 35, name: "Gigabyte A620M S2H",               category: "motherboard", brand: "Gigabyte",   price: 100000,  specs: "mATX, AM5, DDR5, PCIe 4.0, M.2", image: "https://www.infinitonline.com.ar/thumb/000000000000287590999Mother-Gigabyte-A620M-S2H-DDR5-AM5_400x400.jpg" },
  // ─── Fuentes de Poder ───
  { id: 36, name: "Thermaltake TR2 500W",            category: "fuente",    brand: "Thermaltake",   price: 50000,   specs: "500W, 80+, ATX, Ventilador 120mm", image: "https://www.infinitonline.com.ar/thumb/0NBTR2-500NL2NC56568_400x400.jpg" },
  { id: 37, name: "Raidmax XTB 650W",                category: "fuente",    brand: "Raidmax",       price: 55000,   specs: "650W, 80+ White, ATX, Ventilador 120mm", image: "https://www.infinitonline.com.ar/thumb/0000NBRX-650XTB56550_400x400.png" },
  { id: 38, name: "Raptor VOL 650W 80+ Bronze",      category: "fuente",    brand: "Raptor",        price: 60000,   specs: "650W, 80+ Bronze, ATX, Semi-Modular", image: "https://www.infinitonline.com.ar/thumb/000000000000399416089Sin-titulo_400x400.png" },
  { id: 39, name: "MSI MAG A550BN 550W",             category: "fuente",    brand: "MSI",           price: 65000,   specs: "550W, 80+ Bronze, ATX, Ventilador 120mm", image: "https://www.infinitonline.com.ar/thumb/000000000000447146719D-Q-NP-2X-878279-MLA99503054810-112025-T_400x400.webp" },
  { id: 40, name: "Gigabyte 550W 80+ Silver",        category: "fuente",    brand: "Gigabyte",      price: 70000,   specs: "550W, 80+ Silver, ATX 3.1", image: "https://www.infinitonline.com.ar/thumb/0000000000003294662302_400x400.png" },
  { id: 41, name: "Corsair CV650 650W",              category: "fuente",    brand: "Corsair",       price: 75000,   specs: "650W, 80+ Bronze, ATX, Ventilador 120mm", image: "https://www.infinitonline.com.ar/thumb/NBMPE-6502-ACAAG56543_400x400.jpg" },
  { id: 42, name: "Raidmax XTB 750W",                category: "fuente",    brand: "Raidmax",       price: 80000,  specs: "750W, 80+ White, ATX, Ventilador 120mm", image: "https://www.infinitonline.com.ar/thumb/0000NBRX-800ACV56531_400x400.png" },
  { id: 43, name: "Gigabyte 750W 80+ Gold",          category: "fuente",    brand: "Gigabyte",      price: 85000,  specs: "750W, 80+ Gold, ATX, Modular", image: "https://www.infinitonline.com.ar/thumb/NBGP-UD750GMPG556557_400x400.jpg" },
  // ─── Monitores Gaming ───
  { id: 44, name: "MSI Monitor Gaming G242Le14 24\" 144Hz",          category: "monitor", brand: "MSI",       price: 275457,  specs: "24\" FHD, 144Hz, 1ms, HDMI/DP, FreeSync", image: "https://www.infinitonline.com.ar/thumb/0000000000004445413571024_400x400.png" },
  { id: 45, name: "Monitor Gamer Gigabyte 24.5\" GS25F2",           category: "monitor", brand: "Gigabyte",   price: 292826,  specs: "24.5\" FHD, 180Hz, 1ms, IPS, FreeSync", image: "https://www.infinitonline.com.ar/thumb/000000000000433962356Mtec-Gigabyte-GS25F2-Monitor-Gamer-IPS-768x768_400x400.jpg" },
  { id: 46, name: "Monitor 27\" Asus VG279Q3A Gaming FHD IPS 180Hz", category: "monitor", brand: "ASUS",      price: 358093,  specs: "27\" FHD, 180Hz, 1ms, IPS, FreeSync", image: "https://www.infinitonline.com.ar/thumb/000000000000410905285Sin-titulo_400x400.png" },
  { id: 47, name: "Monitor 24.5\" Gamer Zowie XL2546K 240Hz DyAc",  category: "monitor", brand: "Zowie",      price: 595151,  specs: "24.5\" FHD, 240Hz, 0.5ms, TN, DyAc", image: "https://www.infinitonline.com.ar/thumb/0NB9H.LJNLB.QBR56759_400x400.jpg" },
  { id: 48, name: "AOC Monitor LED Plano Gamer 27\" 2790Vx",        category: "monitor", brand: "AOC",        price: 644758,  specs: "27\" FHD, 180Hz, 1ms, IPS, FreeSync", image: "https://www.infinitonline.com.ar/thumb/000000NBG2790VX56426_400x400.jpg" },
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
  monitor:         ["6d28d9","ffffff"],
};

products.forEach(p => {
  if (!p.image) {
    const [bg, fg] = catPlaceholders[p.category] || ["1e3a8a","ffffff"];
    const short = p.name.length > 20 ? p.name.slice(0,18)+".." : p.name;
    p.image = `https://placehold.co/300x200/${bg}/${fg}?text=${encodeURIComponent(short)}`;
  }
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
  { key: "monitor",         label: "Monitores Gaming" },
  { key: "nuestros",        label: "Nuestros Productos" },
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
