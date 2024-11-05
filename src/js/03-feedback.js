
import throttle from 'lodash.throttle';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;
const LOCAL_STORAGE_KEY = 'feedback-form-state';


function onFormInput() {
  const formData = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}


form.addEventListener('input', throttle(onFormInput, 500));


function populateForm() {
  const savedFormData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailField.value = email;
    messageField.value = message;
  }
}
populateForm();


function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    email: emailField.value,
    message: messageField.value,
  };
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
}
form.addEventListener('submit', onFormSubmit);
