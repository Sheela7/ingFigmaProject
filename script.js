let navbar = document.querySelector(".navbar");
i;
let hamBurgerMenu = document.querySelector(".hamburger-menu");
let hamBurgerMenuIcon = document.querySelector(".hamburger-menu i");

function showMenu() {
  navbar.classList.toggle("show-menu");
  const isShowingMenu = navbar.classList.contains("show-menu");
  hamBurgerMenuIcon.classList = isShowingMenu
    ? "fa-solid fa-bars"
    : "fa-solid fa-xmark";
}
