import {
  parallaxScroll
} from './modules/parallax';
import yandexmaps from "./modules/ymaps.js";
import skills from "./modules/skills.js";
import hamMenu from "./modules/hamMenu";
import btnsScroll from "./modules/btnsScroll.js";

document.addEventListener('DOMContentLoaded', () => {
  parallaxScroll();
  yandexmaps();
  skills();
  hamMenu();
  btnsScroll('btn_next');
});