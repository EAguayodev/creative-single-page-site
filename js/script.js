// menu toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".list-container");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

mobileToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  iconOpen.classList.toggle(".show");
  iconClose.classList.toggle("show");
  mobileToggle.classList.toggle("show");
});


// slider