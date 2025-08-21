// menu toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".list-container");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

mobileToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  iconOpen.classList.toggle("show");
  iconClose.classList.toggle("show");
  mobileToggle.classList.toggle("show");
});

// image slider & text slider
const images = [
  "assets/desktop/image-slide-1.jpg",
  "assets/desktop/image-slide-2.jpg",
  "assets/desktop/image-slide-3.jpg",
];

const h2 = [
  "Brand naming & guidelines",
  "Brand identity & merchandise",
  "Brand identity & design",
];

const p = ["Lean Product Roadmap", "New Majestic Hotel", "Crypto Dashboard"];

const small = ["2019 project", "2018 project", "2016 project"];

let currentIndex = 0;

const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const imageElement = document.querySelector(".slide");
const headingElement = document.querySelector(".branding-title");
const slideTitleElement = document.querySelector(".product-title");
const slideProject = document.querySelector("small");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
  headingElement.textContent = h2[currentIndex];
  slideTitleElement.textContent = p[currentIndex];
  slideProject.textContent = small[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
  headingElement.textContent = h2[currentIndex];
  slideTitleElement.textContent = p[currentIndex];
  slideProject.textContent = small[currentIndex];
});
