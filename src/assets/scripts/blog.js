import blogList from  "./modules/blogList.js";
import {parallaxScroll} from './modules/parallax';

document.addEventListener('DOMContentLoaded',()=>{
  blogList();
  parallaxScroll();
});