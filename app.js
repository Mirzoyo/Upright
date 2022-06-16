const burger = document.getElementById("burger");
const mobileNav = document.querySelector(".mobile_nav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("show-menu");
});
