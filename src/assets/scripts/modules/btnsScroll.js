import smoothScroll from "./smoothScroll.js";

const btnsScroll = (btnId) => {
  const btn = document.getElementById(btnId);
  const btn_href = btn.getAttribute('href');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(btn_href, 5000);
  });

}
export default btnsScroll;