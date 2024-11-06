const productsData = [
    {
        name: "Version of Creed Aventus",
        price: 95,
        stars: 4.5,
    },
    {
        name: "Version of Bvlgari Tygar",
        price: 120,
        stars: 4,
    },
    {
        name: "Version of Chanel Bleu De Chanel",
        price: 80,
        stars: 4.2,
    },
    {
        name: "Version of Gucci Bloom",
        price: 110,
        stars: 5,
    },
    {
        name: "Version of YSL Yves Saint Laurent Black Opium",
        price: 100,
        stars: 3.8,
    },
    {
        name: "Version of Yves Saint Laurent Supreme Bouquet",
        price: 90,
        stars: 4.7,
    },
    {
        name: "Version of Sospiro Erba Pura",
        price: 140,
        stars: 4.9,
    },
    {
        name: "Version of Dior Gris",
        price: 125,
        stars: 5,
    },
    {
        name: "Version of Dolce and Gabbana The One Women",
        price: 105,
        stars: 5,
    },
    {
        name: "Version of Louis Vuitton Matiere Noire",
        price: 100,
        stars: 4.5,
    },
    {
        name: "Version of The Spirit of Dubai Dubai Meydan",
        price: 125,
        stars: 3.8,
    }
];

const oudhData = [
    {
        name: "khalaki Arabia",
        price: 95,
        stars: 4.5,
    },
    {
        name: "Version Gucci Bloom",
        price: 120,
        stars: 4,
    },
    {
        name: "Hindi dugha",
        price: 110,
        stars: 4.2,
    },
    {
        name: "Hindi Girmit",
        price: 105,
        stars: 5,
    },
    {
        name: "Filipini Tripple Super",
        price: 100,
        stars: 3.8,
    },
    {
        name: "Merauki Hai Tripple Super",
        price: 90,
        stars: 4.7,
    },
];


function populateProducCarousel(data, carousel) {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('carousel__item--arrival');

        const imageName = oudhData.includes(item)
            ? `oudh-bg.png`
            : `arrival-bg.png`;

        const cardImage = document.createElement('div');
        cardImage.style.backgroundImage = `url('/assets/images/${imageName}')`;
        cardImage.style.backgroundSize = 'cover';
        cardImage.style.position = 'relative';
        cardImage.style.height = '250px';
        cardImage.style.width = '100%';
        cardImage.style.borderRadius = '1rem';

        const cardDetails = document.createElement('div');
        cardDetails.classList.add('carousel__item--arrival--details');

        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container');

        const roundedRating = Math.floor(item.stars);
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star-icon');
            star.innerHTML = i <= roundedRating ? "★" : "☆";
            starContainer.appendChild(star);
        }

        starContainer.innerHTML += `
            <span class="text-base" style="margin-left: 10px; padding-top: 4px;">
                (${item.stars})
            </span>
        `;

        cardDetails.innerHTML = `
            <h4 class="text-center font-open-sans fg-dark text-md" style="margin-top: 20px;">${item.name}</h4>
            <p class="text-center font-open-sans fg-dark"  style="margin-top: 10px;">AED ${item.price}</p>
        `;

        cardDetails.appendChild(starContainer);
        card.appendChild(cardImage);
        card.appendChild(cardDetails);

        carousel.appendChild(card);
    });
}


const arrivalsCarousel = document.getElementById('arrival-carousel');
const bestSellersCarousel = document.getElementById('bestsellers-carousel');
const oudhCarousel = document.getElementById('oudh-carousel');

populateProducCarousel(productsData, arrivalsCarousel);
populateProducCarousel(productsData, bestSellersCarousel);  
populateProducCarousel(oudhData, oudhCarousel);