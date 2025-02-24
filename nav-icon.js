const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const section = document.querySelector("section");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Mencegah event bubbling
  dropdownMenu.classList.toggle("show");
  section.classList.toggle("menu-active");
});

// Menutup menu ketika mengklik di luar menu
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
    section.classList.remove("menu-active");
  }
});

// document.querySelector(".menu-icon").addEventListener("click", function () {
//   const dropdownMenu = document.querySelector(".dropdown-menu");
//   const section = document.querySelector("section");

//   dropdownMenu.classList.toggle("show");
//   section.classList.toggle("menu-active");
// });
