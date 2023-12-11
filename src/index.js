import './style.css';
import { query, make } from './jeffQuery.js';

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

function updateSliderButton(canSlide, button) {
    if (canSlide) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const cardCount = 16;
const cardsPerSlide = 4;
const maxSlides = cardCount / cardsPerSlide;
const minSlides = 0;

createCards(cardCount);
slider.style.width = `calc(100% * ${maxSlides})`;

let currSlide = 0;

updateSliderButton(currSlide < maxSlides - 1, sliderForward);
updateSliderButton(currSlide > minSlides, sliderBack);
sliderForward.addEventListener('click', () => {
    if (currSlide < maxSlides - 1) {
        // We subtract one from maxSlides cause if we don't, user can slide out into emptiness
        currSlide += 1;
        slider.style.right = `${currSlide * 100}%`;
    }

    updateSliderButton(currSlide < maxSlides - 1, sliderForward);
    updateSliderButton(currSlide > minSlides, sliderBack);
});
sliderBack.addEventListener('click', () => {
    if (currSlide > minSlides) {
        currSlide -= 1;
        slider.style.right = `${currSlide * 100}%`;
    }

    updateSliderButton(currSlide > minSlides, sliderBack);
    updateSliderButton(currSlide < maxSlides - 1, sliderForward);
});

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
