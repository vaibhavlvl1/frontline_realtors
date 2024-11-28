let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slideOwl");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].classList.remove("inview");
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add("inview");
}

// Auto-scroll every 3 seconds
setInterval(showNextSlide, 3000);
