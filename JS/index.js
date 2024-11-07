let currentIndex = 0;
const itemsToShow = 4;
const carouselInner = document.querySelector('.carousel-seguradoras-inner');
const items = document.querySelectorAll('.carousel-seguradoras-item');

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function nextSlide() {
    if (currentIndex < items.length - itemsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - itemsToShow;
    }
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);
