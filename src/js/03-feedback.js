import throttle from 'lodash.throttle';
const updateStorageTime = 500;
//pobieram elementy
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
//tworze klucz do localStorage.getItem
const localStorageKey = 'feedback-form-state';

//dodawanie do localeStorage
form.addEventListener('input', throttle(inputForm, updateStorageTime));
function inputForm(e) {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: email.value, message: message.value })
  );
  localStorage.getItem(localStorageKey);
}
//pobieramy to co zapisalismy i dodajemy do formularza
const formData = localStorage.getItem(localStorageKey);
window.addEventListener('load', e => {
  // tutaj cała logika pobrania z localStorage i wrzucenia do formularza/ustawienia value

  if (formData) {
    const parsedData = JSON.parse(formData);
    email.value = parsedData.email || '';
    message.value = parsedData.message || '';
  }
});

//usługa submit do czyszczenia localeStorage
form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(e.currentTarget.reset());
  console.log(formData);
});
