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

const header = document.querySelector("header")
const header_container = header.querySelector(".container")

const header_io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header_container.classList.remove("active")
    } else {
      header_container.classList.add("active") 
    }
  })
}, { rootMargin: "150px 0px 0px 0px" })

header_io.observe(header)


const revealElementsMargin = (window.innerHeight * 0.9) - window.innerHeight
const revealElements_io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target
      target.classList.add("revealed")
      revealElements_io.unobserve(target)
    }
  })
}, { rootMargin: `0px 0px ${revealElementsMargin}px 0px` })


const revealElements = document.querySelectorAll("[data-reveal]")

for (let i = 0; i < revealElements.length; i++) {
  revealElements_io.observe(revealElements[i])
}