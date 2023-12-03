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

const clearData = event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.clear();
  form.reset();
};
const updateData = () => {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    form.email.value = localData.email;
    form.message.value = localData.message;
  } else form.reset();
};
updateData();

form.addEventListener('input', saveData);
form.addEventListener('submit', clearData);
