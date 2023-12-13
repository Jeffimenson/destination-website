import './style.css';
import { query, make } from './jeffQuery.js';
import createSlider from './slider.js';

const slider = query('.slider');
const sliderForward = query('.arrow-holder .forward');
const sliderBack = query('.arrow-holder .back');

function createCard(title, desc) {
    const card = make('div.card', slider);

    const imgHolder = make('div.img-holder', card);
    const img = make('img', imgHolder);
    img.src =
        'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const but = make('button.basic-but', imgHolder);
    but.textContent = '+';

    const h3 = make('h3', card);
    h3.textContent = title;
    const p = make('p', card);
    p.textContent = desc;
}

function createCards(count) {
    for (let i = 0; i < count; i += 1) {
        createCard('Test', 'This is the description for the test card');
    }
}

const cardCount = 16;
const cardsPerSlide = 4;

createCards(cardCount);
createSlider(sliderForward, sliderBack, slider, cardCount, cardsPerSlide);

// hide header on scroll code
const header = query('header');
let lastKnownScrollPosition;
document.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

// return to top
const topper = query('.topper');
topper.addEventListener('click', () => {
    window.scroll(0, 0);
});
