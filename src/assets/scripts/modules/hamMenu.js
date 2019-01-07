const hamMenu = () =>{
  const ham_btn = document.getElementById('ham_btn'),
        ham_menu = document.querySelector('#ham_menu'),
        body = document.querySelector('body');

  const toggleMenu = () =>{
    ham_btn.classList.toggle('is-active');
    ham_menu.classList.toggle('is-active');
    body.classList.toggle('is-locked');
  }

  ham_btn.addEventListener('click',e=>{
    e.preventDefault;
    toggleMenu();
  })

};

export default hamMenu;