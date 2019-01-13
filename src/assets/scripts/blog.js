import blogList from "./modules/blogList.js";
import preloader from './modules/preloader';
import {
  parallaxScroll
} from './modules/parallax';
import hamMenu from "./modules/hamMenu";
import {
  swipeBtn,
  stickyMenu
} from "./modules/swipeBtn";

document.addEventListener('DOMContentLoaded', () => {
  blogList();
  parallaxScroll();
  hamMenu();
  swipeBtn();
  stickyMenu();
  preloader();
});