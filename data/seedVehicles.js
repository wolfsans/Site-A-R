const fordKaImages = [
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-01.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-08.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-09.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-11.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-12.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-13.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-02.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-10.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-14.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-04.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-05.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-03.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-06.jpeg", import.meta.url).href,
  new URL("../assets/vehicles/ford-ka-2022/ford-ka-2022-07.jpeg", import.meta.url).href
];

export const seedVehicles = [
  {
    id: "seed-ford-ka-2022",
    title: "Ford Ka Sedan 1.5",
    brand: "Ford",
    year: "2022",
    km: 70000,
    transmission: "Automático",
    fuel: "Flex",
    price: 0,
    featured: true,
    sold: false,
    description:
      "Ford Ka Sedan 1.5 2022, câmbio automático, 70 mil km, cor branca, interior em couro, multimídia, rodas de liga, faróis de neblina e excelente apresentação.",
    images: fordKaImages
  },
  {
    id: "seed-corolla-xei",
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
    id: "seed-civic-exl",
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
    id: "seed-t-cross-highline",
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
    id: "seed-onix-premier",
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
    id: "seed-compass-longitude",
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
    id: "seed-strada-volcano",
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
    id: "seed-hb20-comfort",
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
