import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const data = {
  email: '',
  message: '',
};

const saveData = throttle(event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

const updateData = () => {
  if (JSON.parse(localStorage.getItem('feedback-form-state')) === null) {
    return;
  } else {
    const lastData = JSON.parse(localStorage.getItem('feedback-form-state'));
    form.email.value = lastData.email;
    form.message.value = lastData.message;
    data.message = lastData.message;
    data.email = lastData.email;
  }
};
window.addEventListener('DOMContentLoaded', updateData);

const clearData = event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.clear();
  form.reset();
};
form.addEventListener('input', saveData);
form.addEventListener('submit', clearData);
