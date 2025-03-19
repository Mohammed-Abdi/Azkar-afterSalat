let menu = document.querySelector(".menu");
let sideNav = document.querySelector(".sideNav");
let main = document.querySelector("main");

menu.addEventListener("click", () => {
  sideNav.classList.add("show");
});

sideNav.addEventListener("click", () => {
  sideNav.classList.remove("show");
});

main.addEventListener("click", () => {
  sideNav.classList.remove("show");
});
