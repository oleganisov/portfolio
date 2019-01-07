const swipeBtn = () => {
  const blog_btn = document.getElementById('blog_btn');
  const swipeActive = () => {
    if (window.innerWidth <= 768) {
      blog_btn.classList.add('is-active');
    }
    else blog_btn.classList.remove('is-active');
  }
  swipeActive();
  window.addEventListener('resize', () => {
    swipeActive();
  })
}
const stickyMenu = () => {
  const blog_btn = document.getElementById('blog_btn');
  const blog_menu = document.getElementById('blog_menu');

  blog_btn.addEventListener('click', ()=>{
    blog_menu.classList.toggle('is-active');
  });
}

export {swipeBtn, stickyMenu};