import {parallaxScroll} from './modules/parallax';
import yandexmaps from  "./modules/ymaps.js";
import skills from  "./modules/skills.js";

document.addEventListener('DOMContentLoaded',()=>{
  parallaxScroll();
  yandexmaps();
  skills();
});