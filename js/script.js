// js/carousel.js

let currentSlide = 0; // Start with the first slide
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.fa-chevron-left');
const nextButton = document.querySelector('.fa-chevron-right');

// Function to update slides
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

// Initialize slides
updateSlides();

// Event listeners for buttons
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlides();
});

// Optional: Auto-scroll every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}, 2000);
