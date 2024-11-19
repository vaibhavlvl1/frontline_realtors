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
    navbarContainer.style.borderBottom = "2px solid #fff";
  }
});

// owl carousel
$(document).ready(function () {
  $("#propertyCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
    navText: [
      '<span class="owl-nav-prev">‹</span>',
      '<span class="owl-nav-next">›</span>',
    ],
  });
});

// why choose counters

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter-number");

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-count");
      const current = +counter.innerText;
      const increment = target / 200; // Adjust speed by dividing target

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10); // Adjust delay for smoothness
      } else {
        counter.innerText = target + "+"; // Ensure final number matches
      }
    };

    updateCounter();
  });
});

// script to generate whatsapp link

function submitToWhatsApp() {
  const name = document.getElementById("name").value;
  const enquiryType =
    document.getElementById("enquiry-type").value || "not-provided";
  const propertyType =
    document.getElementById("property-type").value || "not-provided";
  const noOfBeds = document.getElementById("beds").value || "not-provided";
  const noOfBaths = document.getElementById("baths").value || "not-provided";
  const phoneNumber = document.getElementById("mobile");

  let whatsApptxt = `Hello My name is ${name}. I want to enquire about ${enquiryType} for  property type : ${propertyType} with ${noOfBeds} bedrooms  and ${noOfBaths} baths`;

  const whatsAppUrl = `https://wa.me/${9579937573}?text=${whatsApptxt}`;
  window.open(whatsAppUrl, "blank");
}

// javascript for testimonials slider

const testimonial_slides = document.querySelectorAll(".testimonial-slide");
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");

let currentSlide = 0;

function showSlide(index) {
  testimonial_slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonial_slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + testimonial_slides.length) % testimonial_slides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
