import {
  parallaxScroll
} from './modules/parallax';
import slider from "./modules/slider.js";
import hamMenu from "./modules/hamMenu";

document.addEventListener('DOMContentLoaded', () => {
  parallaxScroll();
  slider();
  hamMenu();
});