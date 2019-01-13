import switchCards from './modules/switchCards';
import authorization from './modules/authorization';
import preloader from './modules/preloader';
import {
    parallaxMouse
} from './modules/parallax';

document.addEventListener('DOMContentLoaded', () => {

    let linkAuth = document.querySelector('#to-auth'),
        flipContainer = document.querySelector('#flip-container'),
        signInReset = document.querySelector('#log-reset');

    //Swipping cards 'welcome' an 'authorization'
    switchCards(linkAuth, flipContainer, signInReset);
    parallaxMouse();
    preloader();
    authorization();
});