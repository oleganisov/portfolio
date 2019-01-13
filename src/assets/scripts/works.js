import {
  parallaxScroll
} from './modules/parallax';
import slider from "./modules/slider.js";
import hamMenu from "./modules/hamMenu";
import btnsScroll from "./modules/btnsScroll.js";
import preloader from './modules/preloader';

document.addEventListener('DOMContentLoaded', () => {
  parallaxScroll();
  slider();
  hamMenu();
  btnsScroll('btn_next');
  btnsScroll('btn_prev');
  preloader();
});