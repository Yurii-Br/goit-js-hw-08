'use strict';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInp = form.querySelector('input[name="email"]');
const txtInp = form.querySelector('textarea[name="message"]');

const saveDataFromInp = throttle(() => {
  const formData = {
    email: emailInp.value,
    message: txtInp.value
  };
  localStorage.setItem('form-date', JSON.stringify(formData));
}, 500);

emailInp.addEventListener('input', saveDataFromInp);
txtInp.addEventListener('input', saveDataFromInp);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInp.value || !txtInp.value) {
    alert('Please fill in all fields.');
    return;
  }

  const formData = {
    email: emailInp.value,
    message: txtInp.value
  };

  console.log(formData);

  emailInp.value = '';
  txtInp.value = '';

  localStorage.removeItem('form-date');
});


function initializeForm() {
  const storFormData = localStorage.getItem('form-date');

  if (storFormData) {
    const formData = JSON.parse(storFormData);
    emailInp.value = formData.email;
    txtInp.value = formData.message;
  }
}

initializeForm();

