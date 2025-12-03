const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector("nav");
const closeBurger = document.getElementById("closeBurger")
const navItem = document.querySelectorAll(".nav-item")

console.log(navItem)


burgerBtn.addEventListener("click", () => {
  nav.classList.add("nav-open");
});

closeBurger.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});


navItem.forEach(element => {
  element.addEventListener("click", () => {
    nav.classList.remove("nav-open");
  })
});