// /=======================    toggle icon navbar ===============================/

const menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//=======================    toggle icon navbar ===============================/

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top <= offset + height) {
      navLinks.forEach.apply((Links) => {
        Links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //============================================ Sticky Navbar ========================================*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //============================================ remove toggle icon navbar  ========================================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

//============================================ scroll reveal ========================================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .porfolio-box, .contact from",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

//============================================ Typed js  ========================================*/

const typed = new Typed(".multiple-text", {
  strings: ["web developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 5000,
  loop: true,
});
