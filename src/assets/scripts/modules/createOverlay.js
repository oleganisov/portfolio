const createOverlay = () => {
  let fragment = document.createElement('div');
  const template = document.querySelector("#modal-template").innerHTML;

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".modal");
  const overlayText = fragment.querySelector(".modal__text");
  const closeBtn = fragment.querySelector("#btn_close");

  fragment = null;

  let close = () => {
    closeBtn.addEventListener('click', e => {
      e.preventDefault();
      document.body.removeChild(overlayElement);
    })
  }
  let open = () => {
    document.body.appendChild(overlayElement);
  }
  let setContent = (text_mod) => {
    overlayText.innerHTML = text_mod;
  }
  return {
    open,
    close,
    setContent
  }
}

export default createOverlay;