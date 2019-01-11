// import createOverlay from './createOverlay';

const authValidate = () => {
  const sign_in = document.querySelector('#sign-in');
  sign_in.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sign_in.elements.check_first.checked == false || sign_in.elements.check_second.value !== 'y') {
      console.log('Ты робот!');
    } else {
      console.log('Ты человек!');
    }
  });

}

export default authValidate;