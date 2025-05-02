// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider img');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Featured Properties Data
const properties = [
    {
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
        title: 'Modern Penthouse',
        price: '$2,500,000',
        details: '4 Bed | 3 Bath | 3,500 sqft'
    },
    {
        image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg',
        title: 'Beachfront Villa',
        price: '$4,200,000',
        details: '5 Bed | 4 Bath | 5,000 sqft'
    },
    {
        image: 'https://images.pexels.com/photos/7031593/pexels-photo-7031593.jpeg',
        title: 'Mountain Retreat',
        price: '$1,800,000',
        details: '3 Bed | 2 Bath | 2,200 sqft'
    }
];

// Generate Property Cards
const propertiesGrid = document.querySelector('.properties-grid');

properties.forEach(property => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}">
        </div>
        <div class="property-info">
            <h3>${property.title}</h3>
            <p class="property-price">${property.price}</p>
            <p>${property.details}</p>
        </div>
    `;
    propertiesGrid.appendChild(card);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    e.target.reset();
});
