// import modal from "./modal.js";

const authorization = () => {

  const signInForm = document.querySelector('#sign-in');
  const userLogin = signInForm.elements.user_login;
  const userPwd = signInForm.elements.user_password;
  const checkBox = signInForm.elements.check_first;
  const radioBtns = signInForm.elements.check_second;

  let validLogin = false;
  let validPassword = false;
  let notRobot = false;

  const inputValidation = function (input) {

    //Get icon from this input
    let icon = input.parentElement.querySelector('.login-input__icon');

    //If input is empty
    if (input.value.length === 0) {
      icon.classList.add('login-input__icon--error');
      return false;
    }
    //If valid
    else if (input.value.length > 0) {
      icon.classList.add('login-input__icon--success');
      return true;
    }
    //If typing
    else {
      icon.classList.remove('login-input__icon--error');
      icon.classList.remove('login-input__icon--success');
      return false;
    }
  }

  //Submit data to server from ajax
  const submitForm = () => {
    let data = {
      name: userLogin.value,
      password: userPwd.value,
    };

    console.group('Data for send on server');
    console.log('Name', data.name);
    console.log('Password', data.password);
    console.groupEnd();
  }

  //Apply input event to inputs
  signInForm.addEventListener('input', e => {
    e.target === userLogin ? validLogin = inputValidation(userLogin) : null;
    e.target === userPwd ? validPassword = inputValidation(userPwd) : null;
  });

  signInForm.addEventListener('click', () => {
    // if checkbox and radiobutton check true
    if (checkBox.checked && radioBtns.value === 'y') {
      notRobot = true;
    } else {
      notRobot = false;
    }
  });

  signInForm.addEventListener('submit', e => {
    e.preventDefault();
    let errorMessages = [];
    !validLogin ? errorMessages.push('Вы не ввели логин') : null;
    !validPassword ? errorMessages.push('Вы не ввели пароль') : null;
    !notRobot ? errorMessages.push('Подвердите, что вы человек') : null;

    if (errorMessages.length) {
      let errorText = `Ошибки: ${errorMessages.join(', ')}.`;
      alert(errorText);
      // modal(errorText);
    } else {
      submitForm();
    }
  })
}

export default authorization;