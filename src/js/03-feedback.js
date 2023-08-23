import throttle from 'lodash.throttle';
//pobieram elementy
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;
//tworze klucz do localStorage.getItem
const LOCALSTORAGE_KEY = 'feedback-form-state';

if (localStorage.getItem('LOCALSTORAGE_KEY') !== null) {
  input.value = localStorage.getItem('LOCALSTORAGE_KEY');
}
input.addEventListener('input', e => {
  localStorage.setItem('LOCALSTORAGE_KEY', input.value);
});

if (localStorage.getItem('LOCALSTORAGE_KEY') !== null) {
  textarea.value = localStorage.getItem('LOCALSTORAGE_KEY');
}
textarea.addEventListener('input', e => {
  localStorage.setItem('LOCALSTORAGE_KEY', textarea.value);
});

feedbackForm.addEventListener(
  'input',
  _.throttle(() => {
    console.log('Input handler call every 500ms');
  }, 500)
);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, feedbackForm.elements.message.value);
  feedbackForm.reset();
}
function saveEmail(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, feedbackForm.elements.email.value);
  feedbackForm.reset();
}

feedbackForm.addEventListener('submit', e => {
  localStorage.removeItem('LOCALSTORAGE_KEY');
});

/*function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}
*/
