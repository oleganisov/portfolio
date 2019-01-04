import switchCards from './modules/switchCards';

document.addEventListener('DOMContentLoaded', () => {
    
    let linkAuth = document.querySelector('#to-auth'),
        flipContainer = document.querySelector('#flip-container'),
        signInReset = document.querySelector('#log-reset');
    
    //Swipping cards 'welcome' an 'authorization'
    switchCards(linkAuth, flipContainer, signInReset);
});