import { createClient } from "@supabase/supabase-js";

const WHATSAPP_URL = "https://wa.me/5549999487011";
const FALLBACK_IMAGE = "assets/brand/aer-logo-transparent.png";
const PAGE_SIZE = 6;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || "vehicle-photos";
const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes("SEU-PROJETO")
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
const WHATSAPP_ATTENDANTS = [
  {
    id: "alan",
    name: "Alan",
    role: "Atendimento e consulta de veículos",
    phone: "5549999487011",
    displayPhone: "(49) 99948-7011",
    icon: "user-round"
  },
  {
    id: "joao",
    name: "João",
    role: "Atendimento comercial",
    phone: "5549920029932",
    displayPhone: "(49) 92002-9932",
    icon: "user-round"
  }
];

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

let vehicles = [];
let currentPage = 1;
let featuredPage = 0;
let heroIndex = 0;
let testimonialIndex = 0;
let heroTimer;
let editingVehicleId = null;
let currentSession = null;

const currency = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
  maximumFractionDigits: 0
});

const kmFormat = new Intl.NumberFormat("pt-BR");

async function loadVehicles() {
  if (!supabase) {
    vehicles = [...seedVehicles];
    return vehicles;
  }

  const { data, error } = await supabase
    .from("vehicles")
    .select("*, vehicle_images(id, image_url, sort_order)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao carregar veículos:", error);
    vehicles = [...seedVehicles];
    return vehicles;
  }

  vehicles = (data || []).map(mapVehicleFromDb);
  return vehicles;
}

function mapVehicleFromDb(row) {
  const images = normalizeVehicleImages(
    (row.vehicle_images || [])
    .slice()
    .sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
      .map((image) => image.image_url)
  );

  return {
    id: String(row.id),
    title: row.title,
    brand: row.brand,
    year: String(row.year),
    km: Number(row.km || 0),
    transmission: row.transmission,
    fuel: row.fuel,
    price: Number(row.price || 0),
    featured: Boolean(row.featured),
    sold: Boolean(row.sold),
    description: row.description || "",
    images: images.length ? images : [FALLBACK_IMAGE]
  };
}

function isUsableVehicleImageUrl(url) {
  const value = String(url || "").trim();
  if (!value) return false;

  const normalized = value.toLowerCase();
  if (["undefined", "null", "false", "[object object]"].includes(normalized)) return false;

  return /^(https?:|data:image\/|blob:|assets\/)/i.test(value);
}

function normalizeVehicleImages(images) {
  return [...new Set((images || []).map((image) => String(image || "").trim()).filter(isUsableVehicleImageUrl))];
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

function vehicleWhatsAppMessage(vehicle) {
  return `Olá, tenho interesse no veículo ${vehicle.title} ${vehicle.year}.`;
}

function whatsappLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
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
  const [pageNameRaw] = location.hash.replace("#", "").split("?");
  const pageName = pageNameRaw || "home";
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

  if (pageName === "detalhes") {
    renderVehicleDetails();
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
  const perPage = getFeaturedPerPage();
  const totalPages = Math.max(1, Math.ceil(featured.length / perPage));
  featuredPage = Math.min(featuredPage, totalPages - 1);
  const pageItems = featured.slice(featuredPage * perPage, featuredPage * perPage + perPage);

  rail.innerHTML = pageItems.map((vehicle) => vehicleCard(vehicle, false)).join("");
  qs("#featuredPrev").disabled = featuredPage === 0;
  qs("#featuredNext").disabled = featuredPage >= totalPages - 1;
  bindCardCarousels(rail);
  observeRevealElements(rail);
  renderIcons();
}

function getFeaturedPerPage() {
  if (window.matchMedia("(max-width: 620px)").matches) return 1;
  if (window.matchMedia("(max-width: 1040px)").matches) return 2;
  return 4;
}

function moveFeatured(direction) {
  const featuredCount = vehicles.filter((vehicle) => !vehicle.sold).slice(0, 8).length;
  const totalPages = Math.max(1, Math.ceil(featuredCount / getFeaturedPerPage()));
  featuredPage = Math.min(Math.max(featuredPage + direction, 0), totalPages - 1);
  renderFeaturedRail();
}

function vehicleCard(vehicle, showDescription = true) {
  return `
    <article class="vehicle-card reveal" data-card-id="${vehicle.id}" data-image-index="0">
      <div class="card-media">
        <a class="card-media-link" href="#detalhes?id=${vehicle.id}" aria-label="Ver detalhes de ${vehicle.title}">
          <img src="${vehicle.images[0]}" alt="${vehicle.title}" loading="lazy" data-vehicle-image />
        </a>
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
          <a class="button button-outline" href="#detalhes?id=${vehicle.id}">Ver detalhes</a>
          <a class="button button-whatsapp js-whatsapp-select" href="${WHATSAPP_URL}" data-message="${vehicleWhatsAppMessage(vehicle)}" data-whatsapp-title="Consultar ${vehicle.title}" data-whatsapp-subtitle="Escolha Alan ou João para verificar disponibilidade, negociação e detalhes deste veículo.">
            <i data-lucide="message-circle"></i>
            Consultar
          </a>
        </div>
      </div>
    </article>
  `;
}

function getHashParam(name) {
  const hashQuery = location.hash.split("?")[1] || "";
  return new URLSearchParams(hashQuery).get(name);
}

function renderVehicleDetails() {
  const id = getHashParam("id");
  const vehicle = vehicles.find((item) => item.id === id && !item.sold);
  const container = qs("#vehicleDetails");

  if (!vehicle) {
    container.innerHTML = `
      <div class="details-empty">
        <span class="eyebrow">Veículo</span>
        <h1>Veículo não encontrado</h1>
        <p>Esse veículo pode ter sido removido ou marcado como vendido.</p>
        <a class="button button-light" href="#estoque">Voltar ao estoque</a>
      </div>
    `;
    renderIcons();
    return;
  }

  container.innerHTML = `
    <div class="details-top">
      <a class="text-link" href="#estoque">Voltar ao estoque</a>
    </div>
    <article class="vehicle-detail reveal is-visible">
      <div class="details-gallery" data-detail-gallery="${vehicle.id}" data-image-index="0">
        <div class="details-main-media">
          <img src="${vehicle.images[0]}" alt="${vehicle.title}" data-vehicle-image />
          ${
            vehicle.images.length > 1
              ? `
                <button class="icon-button details-prev" type="button" aria-label="Foto anterior" data-detail-prev>
                  <i data-lucide="chevron-left"></i>
                </button>
                <button class="icon-button details-next" type="button" aria-label="Próxima foto" data-detail-next>
                  <i data-lucide="chevron-right"></i>
                </button>
              `
              : ""
          }
        </div>
        <div class="details-thumbs">
          ${vehicle.images
            .map(
              (image, index) => `
                <button class="${index === 0 ? "is-active" : ""}" type="button" data-detail-thumb="${index}" aria-label="Foto ${index + 1}">
                  <img src="${image}" alt="${vehicle.title} foto ${index + 1}" loading="lazy" data-vehicle-image />
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="details-info">
        <span class="eyebrow">${vehicle.brand}</span>
        <h1>${vehicle.title}</h1>
        <strong class="price">${formatPrice(vehicle.price)}</strong>
        <div class="details-specs">
          <span><i data-lucide="calendar"></i>${vehicle.year}</span>
          <span><i data-lucide="gauge"></i>${formatKm(vehicle.km)}</span>
          <span><i data-lucide="settings"></i>${vehicle.transmission}</span>
          <span><i data-lucide="fuel"></i>${vehicle.fuel}</span>
        </div>
        <p>${vehicle.description || "Entre em contato para mais informações sobre este veículo."}</p>
        <div class="details-actions">
          <a class="button button-whatsapp js-whatsapp-select" href="${WHATSAPP_URL}" data-message="${vehicleWhatsAppMessage(vehicle)}" data-whatsapp-title="Consultar ${vehicle.title}" data-whatsapp-subtitle="Escolha Alan ou João para falar sobre este veículo.">
            <i data-lucide="message-circle"></i>
            Consultar atendente
          </a>
          <a class="button button-outline" href="#estoque">Ver mais veículos</a>
        </div>
      </div>
    </article>
  `;

  bindDetailsGallery(container, vehicle);
  renderIcons();
}

function bindDetailsGallery(scope, vehicle) {
  const gallery = qs("[data-detail-gallery]", scope);
  if (!gallery) return;

  const setImage = (index) => {
    const next = (index + vehicle.images.length) % vehicle.images.length;
    gallery.dataset.imageIndex = String(next);
    qs(".details-main-media img", gallery).src = vehicle.images[next];
    qsa("[data-detail-thumb]", gallery).forEach((thumb) => {
      thumb.classList.toggle("is-active", Number(thumb.dataset.detailThumb) === next);
    });
  };

  qsa("[data-detail-thumb]", gallery).forEach((thumb) => {
    thumb.addEventListener("click", () => setImage(Number(thumb.dataset.detailThumb)));
  });

  qs("[data-detail-prev]", gallery)?.addEventListener("click", () => setImage(Number(gallery.dataset.imageIndex || 0) - 1));
  qs("[data-detail-next]", gallery)?.addEventListener("click", () => setImage(Number(gallery.dataset.imageIndex || 0) + 1));
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
  observeRevealElements(qs("#vehicleGrid"));
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
  const logged = Boolean(currentSession);
  syncAdminAccess();
  qs("#loginPanel").hidden = logged;
  qs("#adminPanel").hidden = !logged;
  setLoginLoading(false);
  setLoginMessage("");
  if (logged) {
    renderAdminList();
  }
}

function syncAdminAccess() {
  const logged = Boolean(currentSession);
  const stockAdminButton = qs("#stockAdminButton");
  if (stockAdminButton) {
    stockAdminButton.hidden = !logged;
  }

  const stockLogoutButton = qs("#stockLogoutButton");
  if (stockLogoutButton) {
    stockLogoutButton.hidden = !logged;
  }
}

function setLoginMessage(message, type = "error") {
  const messageElement = qs("#loginMessage");
  if (!messageElement) return;

  messageElement.textContent = message;
  messageElement.hidden = !message;
  messageElement.classList.toggle("is-error", Boolean(message) && type === "error");
  messageElement.classList.toggle("is-success", Boolean(message) && type === "success");
}

function setLoginLoading(isLoading) {
  const button = qs("#loginSubmitButton");
  const text = qs("#loginSubmitText");
  if (!button || !text) return;

  button.disabled = isLoading;
  button.classList.toggle("is-loading", isLoading);
  text.textContent = isLoading ? "Entrando..." : "Entrar";
}

async function logoutAdmin() {
  if (supabase) {
    await supabase.auth.signOut();
  }

  currentSession = null;
  resetVehicleForm();
  syncAdminAccess();
  renderAdminState();

  if (location.hash.replace("#", "").split("?")[0] === "admin") {
    location.hash = "estoque";
  }
}

function renderAdminList() {
  const list = qs("#adminList");
  list.innerHTML = vehicles.length
    ? vehicles
        .map(
          (vehicle) => `
            <article class="admin-row">
              <img src="${vehicle.images[0]}" alt="${vehicle.title}" loading="lazy" data-vehicle-image />
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
    button.addEventListener("click", async () => {
      const vehicle = vehicles.find((item) => item.id === button.dataset.toggleSold);
      if (!vehicle) return;
      await updateVehicleSold(vehicle, !vehicle.sold);
    });
  });

  qsa("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      startVehicleEdit(button.dataset.edit);
    });
  });

  qsa("[data-remove]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (editingVehicleId === button.dataset.remove) {
        resetVehicleForm();
      }
      await removeVehicle(button.dataset.remove);
    });
  });
}

async function refreshVehicles() {
  if (supabase) {
    await loadVehicles();
  }
  heroIndex = 0;
  currentPage = 1;
  renderHero();
  renderFeaturedRail();
  renderInventory();
  if (currentSession) {
    renderAdminList();
  }
}

async function updateVehicleSold(vehicle, sold) {
  if (!supabase) {
    vehicle.sold = sold;
    await refreshVehicles();
    return;
  }

  const { error } = await supabase.from("vehicles").update({ sold }).eq("id", vehicle.id);
  if (error) {
    alert(`Não foi possível atualizar o veículo: ${error.message}`);
    return;
  }

  await refreshVehicles();
}

async function removeVehicle(vehicleId) {
  if (!confirm("Remover este veículo do estoque?")) return;

  if (!supabase) {
    vehicles = vehicles.filter((item) => item.id !== vehicleId);
    await refreshVehicles();
    return;
  }

  const { error } = await supabase.from("vehicles").delete().eq("id", vehicleId);
  if (error) {
    alert(`Não foi possível remover o veículo: ${error.message}`);
    return;
  }

  await refreshVehicles();
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
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Não foi possível processar uma das fotos."));
              return;
            }
            resolve(blob);
          },
          "image/jpeg",
          quality
        );
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
    .filter(isUsableVehicleImageUrl);

  const files = form.getAll("photoFiles").filter((file) => file instanceof File && file.size > 0);
  const uploadedImages = await Promise.all(files.map((file) => compressImageFile(file)));
  return [...uploadedImages, ...urlImages];
}

async function uploadVehicleImages(files, vehicleId) {
  if (!supabase || !files.length) return [];

  const uploads = await Promise.all(
    files.map(async (blob, index) => {
      if (typeof blob === "string") return blob;

      const filePath = `${vehicleId}/${Date.now()}-${index}.jpg`;
      const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(filePath, blob, {
        contentType: "image/jpeg",
        upsert: false
      });

      if (error) throw error;

      const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(filePath);
      return data.publicUrl;
    })
  );

  return uploads;
}

async function replaceVehicleImages(vehicleId, imageUrls) {
  const validImageUrls = normalizeVehicleImages(imageUrls);
  if (!supabase || !validImageUrls.length) return;

  const { error: deleteError } = await supabase.from("vehicle_images").delete().eq("vehicle_id", vehicleId);
  if (deleteError) throw deleteError;

  const rows = validImageUrls.map((image_url, sort_order) => ({
    vehicle_id: Number(vehicleId),
    image_url,
    sort_order
  }));

  const { error: insertError } = await supabase.from("vehicle_images").insert(rows);
  if (insertError) throw insertError;
}

async function saveVehicleToSupabase(form, currentVehicle, rawImages) {
  const payload = {
    title: String(form.get("title")).trim(),
    brand: String(form.get("brand")).trim(),
    year: getMainYear(form.get("year")),
    km: Number(form.get("km")),
    transmission: String(form.get("transmission")),
    fuel: String(form.get("fuel")).trim(),
    price: Number(form.get("price") || 0),
    featured: currentVehicle?.featured ?? true,
    sold: currentVehicle?.sold || false,
    description: String(form.get("description")).trim()
  };

  const query = currentVehicle
    ? supabase.from("vehicles").update(payload).eq("id", currentVehicle.id).select("id").single()
    : supabase.from("vehicles").insert(payload).select("id").single();

  const { data, error } = await query;
  if (error) throw error;

  const vehicleId = data.id;
  if (rawImages.length) {
    const imageUrls = await uploadVehicleImages(rawImages, vehicleId);
    await replaceVehicleImages(vehicleId, imageUrls);
  }

  return vehicleId;
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
  qs("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    setLoginMessage("");

    if (!supabase) {
      setLoginMessage("Configuração do Supabase não encontrada. Verifique as variáveis de ambiente na Vercel.");
      return;
    }

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email")).trim();
    const password = String(form.get("password")).trim();

    if (!email || !password) {
      setLoginMessage("Preencha e-mail e senha para acessar o painel administrativo.");
      return;
    }

    setLoginLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setLoginMessage("E-mail ou senha inválidos. Confira os dados e tente novamente.");
        return;
      }

      currentSession = data.session;
      event.currentTarget.reset();
      setLoginMessage("Login realizado com sucesso.", "success");
      renderAdminState();
      location.hash = "estoque";
    } catch (error) {
      setLoginMessage(`Não foi possível entrar agora: ${error.message}`);
    } finally {
      setLoginLoading(false);
    }
  });

  qs("#logoutButton").addEventListener("click", logoutAdmin);
  qs("#stockLogoutButton")?.addEventListener("click", logoutAdmin);

  qs("#seedData").addEventListener("click", async () => {
    resetVehicleForm();
    await loadVehicles();
    await refreshVehicles();
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

    try {
      if (supabase) {
        await saveVehicleToSupabase(form, currentVehicle, images);
      } else {
        const vehiclePayload = {
          id: currentVehicle?.id || createId(),
          title: String(form.get("title")).trim(),
          brand: String(form.get("brand")).trim(),
          year: String(getMainYear(form.get("year"))),
          km: Number(form.get("km")),
          transmission: String(form.get("transmission")),
          fuel: String(form.get("fuel")).trim(),
          price: Number(form.get("price")),
          featured: currentVehicle?.featured ?? true,
          sold: currentVehicle?.sold || false,
          description: String(form.get("description")).trim(),
          images: images.length ? images.map((image) => (typeof image === "string" ? image : URL.createObjectURL(image))) : currentVehicle.images
        };

        if (currentVehicle) {
          vehicles = vehicles.map((vehicle) => (vehicle.id === currentVehicle.id ? vehiclePayload : vehicle));
        } else {
          vehicles.unshift(vehiclePayload);
        }
      }

      resetVehicleForm();
      await refreshVehicles();
    } catch (error) {
      alert(`Não foi possível salvar o veículo: ${error.message}`);
    }
  });
}

function initContactForm() {
  qs("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    const phone = String(form.get("phone")).trim();
    const message = String(form.get("message")).trim();
    openWhatsAppPanel({
      message: `Olá, sou ${name}. Meu telefone é ${phone}. ${message}`,
      title: "Enviar mensagem",
      subtitle: "Escolha o vendedor que deve receber esta mensagem."
    });
  });
}

function openWhatsAppPanel(options = {}) {
  const config = typeof options === "string" ? { message: options } : options;
  const panel = qs("#whatsappPanel");
  const list = qs("#attendantList");
  const baseMessage = String(config.message || "").trim() || "Olá, gostaria de falar com a A&R Automóveis.";
  const title = config.title || "Com quem deseja conversar?";
  const subtitle = config.subtitle || "Escolha um atendente para iniciar a conversa pelo WhatsApp.";
  const preferredAttendant = config.preferredAttendant || "";
  const attendants = [...WHATSAPP_ATTENDANTS].sort((current, next) => {
    if (!preferredAttendant) return 0;
    return Number(next.id === preferredAttendant) - Number(current.id === preferredAttendant);
  });

  qs("#whatsappTitle").textContent = title;
  qs("#whatsappDescription").textContent = subtitle;

  list.innerHTML = attendants.map((attendant) => {
    const fullMessage = `${baseMessage}\nSetor: ${attendant.name}`;
    const isPreferred = attendant.id === preferredAttendant;
    return `
      <a class="attendant-option" href="${whatsappLink(attendant.phone, fullMessage)}" target="_blank" rel="noopener">
        <span class="attendant-icon"><i data-lucide="${attendant.icon}"></i></span>
        <span>
          <strong>${attendant.name}</strong>
          <small>${attendant.role}</small>
          <small>Telefone e WhatsApp: ${attendant.displayPhone}</small>
          ${isPreferred ? `<em>Selecionado</em>` : ""}
        </span>
        <i data-lucide="arrow-up-right"></i>
      </a>
    `;
  }).join("");

  panel.hidden = false;
  document.body.classList.add("has-whatsapp-panel");
  renderIcons();
}

function closeWhatsAppPanel() {
  qs("#whatsappPanel").hidden = true;
  document.body.classList.remove("has-whatsapp-panel");
}

function initWhatsAppPanel() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".js-whatsapp-select");
    if (trigger) {
      event.preventDefault();
      openWhatsAppPanel({
        message: trigger.dataset.message,
        title: trigger.dataset.whatsappTitle,
        subtitle: trigger.dataset.whatsappSubtitle,
        preferredAttendant: trigger.dataset.preferredAttendant
      });
      return;
    }

    if (event.target.closest("[data-close-whatsapp]")) {
      closeWhatsAppPanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !qs("#whatsappPanel").hidden) {
      closeWhatsAppPanel();
    }
  });
}

async function initializeAuth() {
  if (!supabase) {
    currentSession = null;
    return;
  }

  const { data } = await supabase.auth.getSession();
  currentSession = data.session;

  supabase.auth.onAuthStateChange((_event, session) => {
    currentSession = session;
    syncAdminAccess();
    if (location.hash.replace("#", "").split("?")[0] === "admin") {
      renderAdminState();
    }
  });
}

function observeRevealElements(scope = document) {
  const elements = qsa(".reveal:not(.is-visible)", scope);
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!window.revealObserver) {
    window.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          window.revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
  }

  elements.forEach((element) => window.revealObserver.observe(element));
}

function initImageFallbacks() {
  document.addEventListener(
    "error",
    (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || !image.matches("[data-vehicle-image]")) return;

      const thumb = image.closest("[data-detail-thumb]");
      if (thumb) {
        thumb.classList.add("is-image-broken");
        thumb.setAttribute("aria-hidden", "true");
        thumb.disabled = true;
        return;
      }

      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = FALLBACK_IMAGE;
    },
    true
  );
}

async function init() {
  await initializeAuth();
  await loadVehicles();
  initNavigation();
  syncAdminAccess();
  renderHero();
  renderFeaturedRail();
  renderTestimonials();
  renderInventory();
  initFilters();
  initAdmin();
  initContactForm();
  initWhatsAppPanel();
  initImageFallbacks();
  observeRevealElements();

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
  qs("#featuredPrev").addEventListener("click", () => moveFeatured(-1));
  qs("#featuredNext").addEventListener("click", () => moveFeatured(1));
  window.addEventListener("resize", () => renderFeaturedRail());

  startHeroTimer();
  renderIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    console.error("Erro ao iniciar o site:", error);
    vehicles = [...seedVehicles];
    renderHero();
    renderFeaturedRail();
    renderTestimonials();
    renderInventory();
  });
});
