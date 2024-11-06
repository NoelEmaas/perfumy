const brands = [
    'Louis Vuitton', 'Chanel', 'Tom Ford', 'Dior', 'YSL', 'Prada', 'D&G', 'Christian Dior', 'Creed', 'Dolce & Gabana', 'Giorgio Armani', 'Gucci', 'Hermes'
];

const scents = [
    'amber', 'citrus', 'fabric', 'floral', 'musk', 'oudh', 'vanilla',
];

function populatePopularCarousel(data, carousel) {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('carousel__item--popular');

        const imageName = scents.includes(item)
            ? `scent-${item}.png`
            : `popular-bg.png`;

        card.style.backgroundImage = `url('/assets/images/${imageName}')`;
        card.style.backgroundSize = 'cover';
        card.style.position = 'relative';
        
        const overlay = document.createElement('div');
        overlay.classList.add('card-overlay');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        
        const title = document.createElement('h3');
        title.className = 'text-center font-open-sans';
        title.style.position = 'relative';
        title.style.zIndex = '1';
        title.textContent = item;
        title.style.textTransform = 'capitalize';
        
        card.appendChild(overlay);
        card.appendChild(title);
        carousel.appendChild(card);
    }); 
}

const brandsCarousel = document.getElementById('brands-carousel');
const scentsCarousel = document.getElementById('scents-carousel');
populatePopularCarousel(brands, brandsCarousel);
populatePopularCarousel(scents, scentsCarousel);