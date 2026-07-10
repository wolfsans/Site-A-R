const WHATSAPP_URL = "https://wa.me/5549999487011";
const STORAGE_KEY = "aer_vehicles_v1";
const ADMIN_KEY = "aer_admin_logged";
const PAGE_SIZE = 6;

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `veh_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

const seedVehicles = [
  {
    id: createId(),
    title: "Ford Ka Sedan 1.5",
    brand: "Ford",
    year: "2022",
    km: 70000,
    transmission: "Automático",
    fuel: "Flex",
    price: 0,
    featured: true,
    sold: false,
    description: "Ford Ka Sedan 1.5 2022, câmbio automático, 70 mil km, cor branca, interior em couro, multimídia, rodas de liga, faróis de neblina e excelente apresentação.",
    images: [
      "assets/vehicles/ford-ka-2022/ford-ka-2022-01.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-08.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-09.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-11.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-12.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-13.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-02.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-10.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-14.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-04.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-05.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-03.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-06.jpeg",
      "assets/vehicles/ford-ka-2022/ford-ka-2022-07.jpeg"
    ]
  },
  {
    id: createId(),
    title: "Toyota Corolla XEi",
    brand: "Toyota",
    year: "2021/2022",
    km: 41500,
    transmission: "Automático",
    fuel: "Flex",
    price: 134900,
    featured: true,
    sold: false,
    description: "Sedan completo, excelente conservação, central multimídia e revisões em dia.",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Honda Civic EXL",
    brand: "Honda",
    year: "2020/2021",
    km: 52000,
    transmission: "Automático",
    fuel: "Flex",
    price: 128900,
    featured: true,
    sold: false,
    description: "Interior refinado, ótimo desempenho e pacote completo de conforto.",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Volkswagen T-Cross Highline",
    brand: "Volkswagen",
    year: "2022/2023",
    km: 28600,
    transmission: "Automático",
    fuel: "Flex",
    price: 146900,
    featured: true,
    sold: false,
    description: "SUV moderno, alto nível de segurança, painel digital e ótimo espaço interno.",
    images: [
      "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Chevrolet Onix Premier",
    brand: "Chevrolet",
    year: "2021/2021",
    km: 37800,
    transmission: "Automático",
    fuel: "Flex",
    price: 82900,
    featured: false,
    sold: false,
    description: "Hatch econômico, completo e pronto para o dia a dia.",
    images: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Jeep Compass Longitude",
    brand: "Jeep",
    year: "2019/2020",
    km: 64000,
    transmission: "Automático",
    fuel: "Flex",
    price: 112900,
    featured: true,
    sold: false,
    description: "SUV robusto, confortável e com excelente presença.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Fiat Strada Volcano",
    brand: "Fiat",
    year: "2022/2022",
    km: 33200,
    transmission: "Manual",
    fuel: "Flex",
    price: 96900,
    featured: false,
    sold: false,
    description: "Picape versátil, cabine dupla e ótimo custo de manutenção.",
    images: [
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: createId(),
    title: "Hyundai HB20 Comfort",
    brand: "Hyundai",
    year: "2020/2020",
    km: 58700,
    transmission: "Manual",
    fuel: "Flex",
    price: 67900,
    featured: false,
    sold: false,
    description: "Compacto bem cuidado, econômico e com boa procura no mercado.",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

const testimonials = [
  {
    name: "Marcos Almeida",
    text: "Atendimento rápido e negociação muito clara. Consegui ver todos os detalhes antes de fechar a compra.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Fernanda Souza",
    text: "Gostei da atenção no WhatsApp e da organização das informações. O processo ficou simples do começo ao fim.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Rafael Martins",
    text: "A loja passou confiança e ajudou na escolha do carro certo para a minha rotina.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  }
];

let vehicles = loadVehicles();
let currentPage = 1;
let heroIndex = 0;
let testimonialIndex = 0;
let heroTimer;
let editingVehicleId = null;

const currency = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
  maximumFractionDigits: 0
});

const kmFormat = new Intl.NumberFormat("pt-BR");

function loadVehicles() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedVehicles));
    return [...seedVehicles];
  }

  try {
    const parsedVehicles = JSON.parse(stored);
    const hasFordKa = parsedVehicles.some((vehicle) => vehicle.title === "Ford Ka Sedan 1.5" && vehicle.year === "2022");
    if (!hasFordKa) {
      const updatedVehicles = [seedVehicles[0], ...parsedVehicles];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedVehicles));
      return updatedVehicles;
    }

    return parsedVehicles;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedVehicles));
    return [...seedVehicles];
  }
}

function saveVehicles() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
}

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function formatKm(value) {
  return `${kmFormat.format(Number(value || 0))} km`;
}

function formatPrice(value) {
  return Number(value) > 0 ? currency.format(value) : "Sob consulta";
}

function getMainYear(year) {
  const match = String(year).match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function vehicleWhatsApp(vehicle) {
  const text = encodeURIComponent(`Olá, tenho interesse no veículo ${vehicle.title} ${vehicle.year}.`);
  return `${WHATSAPP_URL}?text=${text}`;
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initNavigation() {
  const toggle = qs(".menu-toggle");
  const nav = qs(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("hashchange", showCurrentPage);
  showCurrentPage();
}

function showCurrentPage() {
  const pageName = location.hash.replace("#", "") || "home";
  qsa(".page").forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === pageName);
  });

  if (!qs(`[data-page="${pageName}"]`)) {
    location.hash = "home";
    return;
  }

  if (pageName === "estoque") {
    renderInventory();
  }

  if (pageName === "admin") {
    renderAdminState();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHero() {
  const slides = getHeroSlides();
  const track = qs("#heroTrack");
  const dots = qs("#heroDots");
  heroIndex = Math.min(heroIndex, Math.max(0, slides.length - 1));

  track.innerHTML = slides
    .map(
      (vehicle, index) => `
        <article class="hero-slide ${index === heroIndex ? "is-active" : ""}" style="background-image: url('${vehicle.images[0]}')">
          <div class="hero-content">
            <div class="vehicle-kicker">
              <span>${vehicle.title}</span>
              <span>${formatPrice(vehicle.price)}</span>
            </div>
            <h1>A&R Automóveis</h1>
            <p>Quer encontrar o carro dos seus sonhos? Veja opções selecionadas e consulte disponibilidade pelo WhatsApp.</p>
            <a class="button button-light" href="#estoque">
              Ver Estoque
              <i data-lucide="arrow-right"></i>
            </a>
          </div>
        </article>
      `
    )
    .join("");

  dots.innerHTML = slides
    .map(
      (_, index) => `<button class="${index === heroIndex ? "is-active" : ""}" type="button" aria-label="Ir para slide ${index + 1}" data-hero-dot="${index}"></button>`
    )
    .join("");

  qsa("[data-hero-dot]").forEach((dot) => {
    dot.addEventListener("click", () => {
      heroIndex = Number(dot.dataset.heroDot);
      renderHero();
      startHeroTimer();
    });
  });

  renderIcons();
}

function moveHero(direction) {
  const count = Math.max(1, getHeroSlides().length);
  heroIndex = (heroIndex + direction + count) % count;
  renderHero();
}

function getHeroSlides() {
  const featured = vehicles.filter((vehicle) => vehicle.featured && !vehicle.sold).slice(0, 4);
  return featured.length ? featured : vehicles.filter((vehicle) => !vehicle.sold).slice(0, 4);
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => moveHero(1), 5200);
}

function renderFeaturedRail() {
  const rail = qs("#featuredRail");
  const featured = vehicles.filter((vehicle) => !vehicle.sold).slice(0, 8);
  rail.innerHTML = featured.map((vehicle) => vehicleCard(vehicle, false)).join("");
  bindCardCarousels(rail);
  renderIcons();
}

function vehicleCard(vehicle, showDescription = true) {
  return `
    <article class="vehicle-card" data-card-id="${vehicle.id}" data-image-index="0">
      <div class="card-media">
        <img src="${vehicle.images[0]}" alt="${vehicle.title}" loading="lazy" />
        ${
          vehicle.images.length > 1
            ? `
              <button class="icon-button prev" type="button" aria-label="Foto anterior" data-card-prev>
                <i data-lucide="chevron-left"></i>
              </button>
              <button class="icon-button next" type="button" aria-label="Próxima foto" data-card-next>
                <i data-lucide="chevron-right"></i>
              </button>
            `
            : ""
        }
      </div>
      <div class="card-body">
        <h3>${vehicle.title}</h3>
        <div class="vehicle-meta">
          <span>${vehicle.year}</span>
          <span>${formatKm(vehicle.km)}</span>
          <span>${vehicle.transmission}</span>
          <span>${vehicle.fuel}</span>
        </div>
        ${showDescription && vehicle.description ? `<p class="form-note">${vehicle.description}</p>` : ""}
        <strong class="price">${formatPrice(vehicle.price)}</strong>
        <div class="card-actions">
          <a class="button button-outline" href="#contato">Ver detalhes</a>
          <a class="button button-whatsapp" href="${vehicleWhatsApp(vehicle)}" target="_blank" rel="noopener">
            <i data-lucide="message-circle"></i>
            Consultar
          </a>
        </div>
      </div>
    </article>
  `;
}

function bindCardCarousels(scope = document) {
  qsa("[data-card-prev], [data-card-next]", scope).forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-card-id]");
      const vehicle = vehicles.find((item) => item.id === card.dataset.cardId);
      if (!vehicle) return;

      const direction = button.hasAttribute("data-card-next") ? 1 : -1;
      const current = Number(card.dataset.imageIndex || 0);
      const next = (current + direction + vehicle.images.length) % vehicle.images.length;
      card.dataset.imageIndex = String(next);
      qs("img", card).src = vehicle.images[next];
    });
  });
}

function renderTestimonials() {
  qs("#testimonialStage").innerHTML = testimonials
    .map(
      (item, index) => `
        <article class="testimonial-card ${index === testimonialIndex ? "is-active" : ""}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div>
            <div class="stars">★★★★★</div>
            <p>"${item.text}"</p>
            <strong>${item.name}</strong>
          </div>
        </article>
      `
    )
    .join("");
}

function moveTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonials();
}

function uniqueOptions(key) {
  return [...new Set(vehicles.filter((vehicle) => !vehicle.sold).map((vehicle) => vehicle[key]).filter(Boolean))].sort();
}

function renderFilterOptions() {
  const brand = qs("#filterBrand");
  const fuel = qs("#filterFuel");
  const selectedBrand = brand.value;
  const selectedFuel = fuel.value;
  brand.innerHTML = `<option value="">Todas</option>${uniqueOptions("brand").map((value) => `<option value="${value}">${value}</option>`).join("")}`;
  fuel.innerHTML = `<option value="">Todos</option>${uniqueOptions("fuel").map((value) => `<option value="${value}">${value}</option>`).join("")}`;
  brand.value = selectedBrand;
  fuel.value = selectedFuel;
}

function getFilteredVehicles() {
  const brand = qs("#filterBrand").value;
  const model = qs("#filterModel").value.trim().toLowerCase();
  const yearMin = Number(qs("#filterYearMin").value || 0);
  const yearMax = Number(qs("#filterYearMax").value || 9999);
  const priceMin = Number(qs("#filterPriceMin").value || 0);
  const priceMax = Number(qs("#filterPriceMax").value || Number.MAX_SAFE_INTEGER);
  const transmission = qs("#filterTransmission").value;
  const fuel = qs("#filterFuel").value;
  const kmMin = Number(qs("#filterKmMin").value || 0);
  const kmMax = Number(qs("#filterKmMax").value || Number.MAX_SAFE_INTEGER);

  return vehicles.filter((vehicle) => {
    if (vehicle.sold) return false;
    const year = getMainYear(vehicle.year);
    const matchesBrand = !brand || vehicle.brand === brand;
    const matchesModel = !model || vehicle.title.toLowerCase().includes(model);
    const matchesYear = year >= yearMin && year <= yearMax;
    const matchesPrice = Number(vehicle.price) >= priceMin && Number(vehicle.price) <= priceMax;
    const matchesTransmission = !transmission || vehicle.transmission === transmission;
    const matchesFuel = !fuel || vehicle.fuel === fuel;
    const matchesKm = Number(vehicle.km) >= kmMin && Number(vehicle.km) <= kmMax;

    return matchesBrand && matchesModel && matchesYear && matchesPrice && matchesTransmission && matchesFuel && matchesKm;
  });
}

function renderInventory() {
  renderFilterOptions();
  const filtered = getFilteredVehicles();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  qs("#vehicleCount").textContent = `${filtered.length} ${filtered.length === 1 ? "veículo" : "veículos"}`;
  qs("#vehicleGrid").innerHTML = pageItems.length
    ? pageItems.map((vehicle) => vehicleCard(vehicle)).join("")
    : `<div class="empty-state">Nenhum veículo encontrado com os filtros selecionados.</div>`;

  qs("#pagination").innerHTML =
    totalPages > 1
      ? Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return `<button type="button" class="${page === currentPage ? "is-active" : ""}" data-page-number="${page}">${page}</button>`;
        }).join("")
      : "";

  qsa("[data-page-number]").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = Number(button.dataset.pageNumber);
      renderInventory();
    });
  });

  bindCardCarousels(qs("#vehicleGrid"));
  renderIcons();
}

function initFilters() {
  const filterIds = [
    "filterBrand",
    "filterModel",
    "filterYearMin",
    "filterYearMax",
    "filterPriceMin",
    "filterPriceMax",
    "filterTransmission",
    "filterFuel",
    "filterKmMin",
    "filterKmMax"
  ];

  qs("#searchFilters").addEventListener("click", () => {
    currentPage = 1;
    renderInventory();
  });

  filterIds.forEach((id) => {
    qs(`#${id}`).addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      currentPage = 1;
      renderInventory();
    });
  });

  qs("#clearFilters").addEventListener("click", () => {
    filterIds.forEach((id) => {
      qs(`#${id}`).value = "";
    });
    currentPage = 1;
    renderInventory();
  });
}

function renderAdminState() {
  const logged = localStorage.getItem(ADMIN_KEY) === "true";
  syncAdminAccess();
  qs("#loginPanel").hidden = logged;
  qs("#adminPanel").hidden = !logged;
  if (logged) {
    renderAdminList();
  }
}

function syncAdminAccess() {
  const logged = localStorage.getItem(ADMIN_KEY) === "true";
  const stockAdminButton = qs("#stockAdminButton");
  if (stockAdminButton) {
    stockAdminButton.hidden = !logged;
  }
}

function renderAdminList() {
  const list = qs("#adminList");
  list.innerHTML = vehicles.length
    ? vehicles
        .map(
          (vehicle) => `
            <article class="admin-row">
              <img src="${vehicle.images[0]}" alt="${vehicle.title}" loading="lazy" />
              <div>
                <h3>${vehicle.title}</h3>
                <p>${vehicle.year} | ${formatKm(vehicle.km)} | ${formatPrice(vehicle.price)} ${vehicle.sold ? "| Vendido" : ""}</p>
              </div>
              <div class="admin-actions">
                <button class="button button-outline" type="button" data-edit="${vehicle.id}">
                  Editar
                </button>
                <button class="button button-outline" type="button" data-toggle-sold="${vehicle.id}">
                  ${vehicle.sold ? "Reativar" : "Vendido"}
                </button>
                <button class="button button-dark" type="button" data-remove="${vehicle.id}">
                  Remover
                </button>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">Nenhum veículo cadastrado.</div>`;

  qsa("[data-toggle-sold]").forEach((button) => {
    button.addEventListener("click", () => {
      const vehicle = vehicles.find((item) => item.id === button.dataset.toggleSold);
      if (!vehicle) return;
      vehicle.sold = !vehicle.sold;
      saveAndRefresh();
    });
  });

  qsa("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      startVehicleEdit(button.dataset.edit);
    });
  });

  qsa("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      if (editingVehicleId === button.dataset.remove) {
        resetVehicleForm();
      }
      vehicles = vehicles.filter((item) => item.id !== button.dataset.remove);
      saveAndRefresh();
    });
  });
}

function saveAndRefresh() {
  saveVehicles();
  heroIndex = 0;
  currentPage = 1;
  renderHero();
  renderFeaturedRail();
  renderInventory();
  renderAdminList();
}

function compressImageFile(file, maxSize = 1280, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Não foi possível ler uma das fotos."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Uma das fotos não pôde ser carregada."));
      image.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function getVehicleImages(form) {
  const urlImages = String(form.get("images"))
    .split(/\n+/)
    .map((url) => url.trim())
    .filter(Boolean);

  const files = form.getAll("photoFiles").filter((file) => file instanceof File && file.size > 0);
  const uploadedImages = await Promise.all(files.map((file) => compressImageFile(file)));
  return [...uploadedImages, ...urlImages];
}

function renderSelectedPhotoPreview() {
  const input = qs("#vehiclePhotos");
  const preview = qs("#photoPreview");
  const files = [...input.files];

  if (!files.length) {
    preview.innerHTML = "";
    return;
  }

  preview.innerHTML = files
    .map((file) => `<img src="${URL.createObjectURL(file)}" alt="${file.name}" loading="lazy" />`)
    .join("");
}

function resetVehicleForm() {
  editingVehicleId = null;
  qs("#vehicleForm").reset();
  qs("#photoPreview").innerHTML = "";
  qs("#adminFormTitle").textContent = "Novo veículo";
  qs("#vehicleSubmitText").textContent = "Adicionar ao estoque";
  qs("#cancelEdit").hidden = true;
}

function startVehicleEdit(vehicleId) {
  const vehicle = vehicles.find((item) => item.id === vehicleId);
  if (!vehicle) return;

  editingVehicleId = vehicleId;
  const form = qs("#vehicleForm");
  form.elements.title.value = vehicle.title || "";
  form.elements.brand.value = vehicle.brand || "";
  form.elements.year.value = vehicle.year || "";
  form.elements.km.value = vehicle.km || 0;
  form.elements.transmission.value = vehicle.transmission || "Automático";
  form.elements.fuel.value = vehicle.fuel || "";
  form.elements.price.value = vehicle.price || 0;
  form.elements.description.value = vehicle.description || "";
  form.elements.images.value = (vehicle.images || [])
    .filter((image) => !String(image).startsWith("data:"))
    .join("\n");

  qs("#adminFormTitle").textContent = `Editar: ${vehicle.title}`;
  qs("#vehicleSubmitText").textContent = "Salvar alterações";
  qs("#cancelEdit").hidden = false;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initAdmin() {
  qs("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = String(form.get("username")).trim();
    const password = String(form.get("password")).trim();

    if (username === "admin" && password === "aer2026") {
      localStorage.setItem(ADMIN_KEY, "true");
      event.currentTarget.reset();
      renderAdminState();
      return;
    }

    alert("Usuário ou senha inválidos.");
  });

  qs("#logoutButton").addEventListener("click", () => {
    localStorage.removeItem(ADMIN_KEY);
    renderAdminState();
  });

  qs("#seedData").addEventListener("click", () => {
    resetVehicleForm();
    vehicles = seedVehicles.map((vehicle) => ({ ...vehicle, id: createId() }));
    saveAndRefresh();
  });

  qs("#cancelEdit").addEventListener("click", resetVehicleForm);
  qs("#vehiclePhotos").addEventListener("change", renderSelectedPhotoPreview);

  qs("#vehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const images = await getVehicleImages(form);
    const currentVehicle = editingVehicleId ? vehicles.find((vehicle) => vehicle.id === editingVehicleId) : null;

    if (!images.length && !currentVehicle) {
      alert("Adicione pelo menos uma foto do veículo.");
      return;
    }

    const vehiclePayload = {
      id: currentVehicle?.id || createId(),
      title: String(form.get("title")).trim(),
      brand: String(form.get("brand")).trim(),
      year: String(form.get("year")).trim(),
      km: Number(form.get("km")),
      transmission: String(form.get("transmission")),
      fuel: String(form.get("fuel")).trim(),
      price: Number(form.get("price")),
      featured: currentVehicle?.featured ?? true,
      sold: currentVehicle?.sold || false,
      description: String(form.get("description")).trim(),
      images: images.length ? images : currentVehicle.images
    };

    if (currentVehicle) {
      vehicles = vehicles.map((vehicle) => (vehicle.id === currentVehicle.id ? vehiclePayload : vehicle));
    } else {
      vehicles.unshift(vehiclePayload);
    }

    resetVehicleForm();
    saveAndRefresh();
  });
}

function initContactForm() {
  qs("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    const phone = String(form.get("phone")).trim();
    const message = String(form.get("message")).trim();
    const text = encodeURIComponent(`Olá, sou ${name}. Meu telefone é ${phone}. ${message}`);
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener");
  });
}

function init() {
  initNavigation();
  syncAdminAccess();
  renderHero();
  renderFeaturedRail();
  renderTestimonials();
  renderInventory();
  initFilters();
  initAdmin();
  initContactForm();

  qs(".hero-prev").addEventListener("click", () => {
    moveHero(-1);
    startHeroTimer();
  });

  qs(".hero-next").addEventListener("click", () => {
    moveHero(1);
    startHeroTimer();
  });

  qs("#testimonialPrev").addEventListener("click", () => moveTestimonial(-1));
  qs("#testimonialNext").addEventListener("click", () => moveTestimonial(1));

  startHeroTimer();
  renderIcons();
}

document.addEventListener("DOMContentLoaded", init);
