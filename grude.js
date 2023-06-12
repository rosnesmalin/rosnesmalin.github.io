document.addEventListener("DOMContentLoaded", () => {
  let hamMenuIcon = document.getElementById("ham-menu");
  let navBar = document.querySelector("nav");
  let navLinks = navBar.querySelector("ul");

  hamMenuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamMenuIcon.classList.remove("fa-times");
  });
});

