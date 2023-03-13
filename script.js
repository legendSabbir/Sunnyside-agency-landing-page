const navToggleBtn = document.querySelector(".nav-toggle-btn")
const navbar = document.querySelector(".navbar-list")
const navLinks = document.querySelectorAll(".nav-link")

navToggleBtn.addEventListener("click", toggleNav)

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", toggleNav)
}

function toggleNav () {
  navToggleBtn.classList.toggle("active")
  navbar.classList.toggle("active")
}