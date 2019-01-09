const parallaxMouse = () => {
  const parallaxContainer = document.querySelector(".parallax-block");
  const layers = Array.from(parallaxContainer.children);

  const moveLayers = e => {
    const initialX = window.innerWidth / 2 - e.pageX;
    const initialY = window.innerHeight / 2 - e.pageY;
    layers.forEach((layer, i) => {
      const divider = i / 100;
      const positionX = initialX * divider;
      const positionY = initialY * divider;
      const bottomPosition = (window.innerHeight / 2) * divider;
      const image = layer.firstElementChild;
      image.style.bottom = `-${bottomPosition}px`

      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  };

  window.addEventListener("mousemove", moveLayers);
}

const parallaxScroll = () => {
  const avatar = document.querySelector('.avatar');
  const svg = document.querySelector('.avatar__svg');

  const move = (block, windowScroll, strafeAmount) => {
    const strafe = -windowScroll / strafeAmount + '%';
    const transformString = `translate3d(0,${strafe},0)`;
    const style = block.style;

    style.transform = transformString;
    style.webkitTransform = transformString;
  };
  const init = wScroll => {
    move(svg, wScroll, 20);
    move(avatar, wScroll, 3);
  };
  window.addEventListener('scroll', () => {
    init(window.pageYOffset);
  });

};

export {
  parallaxMouse,
  parallaxScroll
};