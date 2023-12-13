function updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide) {
    const canSlideForward = currSlide < maxSlide - 1;
    const canSlideBack = currSlide > minSlide;

    nextButton.disabled = !canSlideForward;
    backButton.disabled = !canSlideBack;
}

export default function createSlider(
    nextButton,
    backButton,
    sliderElm,
    cardCount,
    cardsPerSlide
) {
    const minSlide = 0;
    const maxSlide = cardCount / cardsPerSlide;

    let currSlide = 0;

    sliderElm.style.width = `calc(100% * ${maxSlide})`;
    nextButton.addEventListener('click', () => {
        if (currSlide < maxSlide - 1) {
            currSlide += 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });
    backButton.addEventListener('click', () => {
        if (currSlide > minSlide) {
            currSlide -= 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });

    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
}
