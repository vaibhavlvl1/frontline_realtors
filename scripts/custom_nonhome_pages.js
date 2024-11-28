// script to add sticky class to navbar after scrolling
let navbar = document.querySelector("nav");
let navbarContainer = document.querySelector(".nav-container");
let hideTrigger = 93;

document.addEventListener("scroll", () => {
  if (window.scrollY > hideTrigger) {
    navbarContainer.style.borderBottom = "none";
    navbar.classList.add("stricky-nav");
  } else {
    navbar.classList.remove("stricky-nav");
    // navbarContainer.style.borderBottom = "2px solid #fff";
  }
});

// mobile menu navigation

let isMenuVisible = false;
menuButton = document.querySelector(".mobile-menu-burger");
mobileMenuPage = document.querySelector(".mobile-menu-container");

menuButton.addEventListener("click", () => {
  if (isMenuVisible == false) {
    mobileMenuPage.style.right = "0";
    isMenuVisible = true;
  } else if (isMenuVisible == true) {
    mobileMenuPage.style.right = "-100%";
    isMenuVisible = false;
  }
});

// fancy box
Fancybox.bind("[data-fancybox]", {
  infinite: true, // Allows infinite scrolling through images
  preload: 2, // Preloads 2 images ahead for performance
  toolbar: {
    display: ["close"], // Display close button only
  },
});
