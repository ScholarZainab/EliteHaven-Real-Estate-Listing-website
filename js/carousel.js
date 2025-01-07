document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".fa-chevron-left");
  const nextButton = document.querySelector(".fa-chevron-right");

  let currentIndex = 0;

  function showSlide(index) {
    if (slides.length > 0) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  // Event Listeners
  if (prevButton) {
    prevButton.addEventListener("click", goToPrevSlide);
  }
  if (nextButton) {
    nextButton.addEventListener("click", goToNextSlide);
  }

  // Optional: Keyboard Navigation
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goToPrevSlide();
      event.preventDefault();
    }
    if (event.key === "ArrowRight") {
      goToNextSlide();
      event.preventDefault();
    }
  });

  // Initial Setup
  showSlide(currentIndex);
});
