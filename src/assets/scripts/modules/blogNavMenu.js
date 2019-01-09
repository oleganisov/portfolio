import viewObserver from "./viewObserver.js";
import smoothScroll from "./smoothScroll.js";

const blogNavMenu = () => {
  let blogPosts = document.querySelectorAll('.blog__item');
  let blogNavs = document.querySelectorAll('.nav-blog__item');
  let blogLinks = document.querySelectorAll('.nav-blog__link');

  window.addEventListener('scroll', () => {
    blogNavs.forEach((item, index) => {
      item.classList.remove('is-active');
      viewObserver(blogPosts[index]) && item.classList.add('is-active');
    })
  })

  blogLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll(`#${blogPosts[index].id}`, 9000);
    })
  })
}

export default blogNavMenu;