document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('active');
});
let currentSlide = 0;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    // Calculate slide width and translate the carousel track
    const slideWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    // Update the current slide based on direction
    currentSlide += direction;

    // Loop back to the beginning/end if out of bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Update carousel position
    updateCarousel();
}

// Initialize the carousel position on page load
document.addEventListener('DOMContentLoaded', updateCarousel);
