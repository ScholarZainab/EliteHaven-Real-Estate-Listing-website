// script.js
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showNextCard() {
    cards[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalCards;
    cards[currentIndex].style.display = 'block';
}

setInterval(showNextCard, 3000);
