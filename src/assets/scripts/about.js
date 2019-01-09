import {
  parallaxScroll
} from './modules/parallax';
import yandexmaps from "./modules/ymaps.js";
import skills from "./modules/skills.js";
import hamMenu from "./modules/hamMenu";

document.addEventListener('DOMContentLoaded', () => {
  parallaxScroll();
  yandexmaps();
  skills();
  hamMenu();
});