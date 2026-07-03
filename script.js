const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const carouselData = [
  [
    {
      src: "assets/peinado-ondas.jpg",
      alt: "Peinado con ondas rubias realizado en Destellos De Belleza"
    },
    {
      src: "assets/peinado-color.jpg",
      alt: "Color y peinado con ondas en tonos claros"
    },
    {
      src: "assets/peinado-volumen.jpg",
      alt: "Peinado rubio con volumen y ondas marcadas"
    }
  ],
  [
    {
      src: "assets/maquillaje-social.jpg",
      alt: "Maquillaje social elegante con acabado luminoso"
    },
    {
      src: "assets/maquillaje-novia.jpg",
      alt: "Maquillaje de novia con peinado rubio"
    },
    {
      src: "assets/maquillaje-glam.jpg",
      alt: "Maquillaje glam con ondas y acabado de evento"
    }
  ],
  [
    {
      src: "assets/unas-acrilicas-corazones.jpg",
      alt: "Unas acrilicas rosadas con detalles de corazones"
    },
    {
      src: "assets/unas-acrilicas-blancas.jpg",
      alt: "Unas acrilicas blancas"
    },
    {
      src: "assets/unas-rojas.jpg",
      alt: "Unas acrilicas rojas y blancas"
    }
  ],
  [
    {
      src: "assets/paquete-novia.jpg",
      alt: "Promocion de maquillaje de novia de Destellos De Belleza"
    },
    {
      src: "assets/paquete-social.jpg",
      alt: "Promocion de maquillaje social de Destellos De Belleza"
    },
    {
      src: "assets/agenda-cita.jpg",
      alt: "Promocion para agendar cita en Destellos De Belleza"
    },
    {
      src: "assets/paquetes-maquillaje.jpg",
      alt: "Paquetes de maquillaje de Destellos De Belleza"
    },
    {
      src: "assets/paquete-noche.jpg",
      alt: "Promocion de maquillaje de noche de Destellos De Belleza"
    },
    {
      src: "assets/paquete-glam.jpg",
      alt: "Promocion de maquillaje glam de Destellos De Belleza"
    }
  ]
];

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function showCarouselItem(carousel, items, index) {
  const image = carousel.querySelector("[data-carousel-image]");
  const count = carousel.querySelector("[data-carousel-count]");
  const item = items[index];

  carousel.classList.add("is-changing");
  image.src = item.src;
  image.alt = item.alt;
  count.textContent = `${index + 1} / ${items.length}`;

  window.setTimeout(() => {
    carousel.classList.remove("is-changing");
  }, 180);
}

document.querySelectorAll("[data-carousel]").forEach((carousel, carouselIndex) => {
  const items = carouselData[carouselIndex];
  if (!items) return;

  let activeIndex = 0;
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const promoButton = carousel.matches("[data-promo-carousel]") ? document.querySelector("[data-promo-next]") : null;
  const button = nextButton || promoButton;

  showCarouselItem(carousel, items, activeIndex);

  if (!button) return;
  button.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % items.length;
    showCarouselItem(carousel, items, activeIndex);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  nav.classList.remove("is-open");
  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
