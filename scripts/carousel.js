function initializeCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const visibleCards = parseInt(carousel.getAttribute('data-visible-cards'), 10);
        carousel.style.setProperty('--visible-cards', visibleCards);
    });
}

function moveRight(button) {
    const carousel = button.closest('.carousel');
    const track = carousel.querySelector('.carousel__track');
    const items = Array.from(track.children);
    const itemsToShow = parseInt(carousel.getAttribute('data-visible-cards'), 10);
    let currentIndex = parseInt(carousel.getAttribute('data-current-index') || '0', 10);

    if (currentIndex < items.length - itemsToShow) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }

    carousel.setAttribute('data-current-index', currentIndex);
    updateCarousel(track, currentIndex);
}

function moveLeft(button) {
    const carousel = button.closest('.carousel');
    const track = carousel.querySelector('.carousel__track');
    const items = Array.from(track.children);
    const itemsToShow = parseInt(carousel.getAttribute('data-visible-cards'), 10);
    let currentIndex = parseInt(carousel.getAttribute('data-current-index') || '0', 10);

    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = items.length - itemsToShow;
    }

    carousel.setAttribute('data-current-index', currentIndex);
    updateCarousel(track, currentIndex);
}

function updateCarousel(track, currentIndex) {
    const item = track.children[0];
    const itemWidth = item.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap);
    
    const translation = (itemWidth + gap) * currentIndex;
    track.style.transform = `translateX(-${translation}px)`;
}

document.addEventListener('DOMContentLoaded', initializeCarousel);