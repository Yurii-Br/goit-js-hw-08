'use strict'
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInp = form.querySelector('input[name="email"]');
const txtInp = form.querySelector('textarea[name = "message"]');

const saveDataFromInp = throttle(() => {
  const formData = {
    emaill:emailInp.value,
    message:txtInp.value
  }
  localStorage.setItem('form-date' , JSON.stringify(formData) )
},500);


emailInp.addEventListener('input',saveDataFromInp);
txtInp.addEventListener('input',saveDataFromInp);

window.addEventListener('DOMContentLoaded', () => {
  const storFormData = localStorage.getItem('form-date');

  if(storFormData){
    const formData = JSON.parse(storFormData);
     emailInp.value = formData.emaill;
     txtInp.value = formData.message; 
  }
});

form.addEventListener('submit', (event) => {
 event.preventDefault();

 console.log('email:', emailInp.value);
 console.log('message:', txtInp.value);

 emailInp.value = '';
 txtInp.value = '';

 localStorage.removeItem('form-date');
})

