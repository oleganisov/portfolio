const overlay = (content) => {
  const modal_container=document.querySelector('#modal_container');
  let modal = document.createElement('div');
  let modal_text = document.createElement('p');
  let modal_link = document.createElement('a');
  let modal_close = document.createElement('div');

  modal.appendChild(modal_text);
  modal.appendChild(modal_link);
  modal.appendChild(modal_close);

  modal.classList.add('modal');
  modal_text.classList.add('modal__text');
  modal_link.classList.add('modal__link');
  modal_close.classList.add('modal__close');

  modal_close.addEventListener('click', e => {
    e.preventDefault();
    modal_container.removeChild(modal);
  })

  modal_text.innerHTML = content;

  modal_container.appendChild(modal);



}

export default overlay;