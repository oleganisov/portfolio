import switchCards from './modules/switchCards';
import authValidate from './modules/authValidate';
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
    authValidate();
});