import blogList from  "./modules/blogList.js";
import {parallaxScroll} from './modules/parallax';
import hamMenu from  "./modules/hamMenu";

document.addEventListener('DOMContentLoaded',()=>{
  blogList();
  parallaxScroll();
  hamMenu();
});