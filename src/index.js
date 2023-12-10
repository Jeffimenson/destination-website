import './style.css';
import { query, make } from './jeffQuery.js';

const slider = query('.slider');

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

const cardCount = 9;

for (let i = 0; i < cardCount; i += 1) {
    createCard('Test', 'This is the description for the test card');
}

// slider.style.width = `${cardCount * 300}px`;
