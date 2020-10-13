import { refs } from '../js/refs';


function handlerBackground(countries) {
    if (countries.length === 1) {
        addBackgroundFlag(countries);
    } else if (countries.length <= 10 || countries.length > 1) {
        removeBackgroundFlag();
    }
}

function addBackgroundFlag(country) {
    refs.flagOverlay.style.backgroundImage = `url(${country[0]['flag']})`;
}

function removeBackgroundFlag() {
    refs.flagOverlay.style.backgroundImage = `url()`;
}

export default handlerBackground;