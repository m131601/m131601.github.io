let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

function updateCarousel(index) {
    const width = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(${-width * index}px)`;
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
}

// Auto-play functionality
setInterval(() => moveSlide(1), 3000);
