import throttle from 'lodash.throttle';
//pobieram elementy
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
//tworze klucz do localStorage.getItem
const localStorageKey = 'feedback-form-state';
const updateStorageTime = 500;
const formData = getSavedData;
//dodawanie do localeStorage
form.addEventListener('input', e => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: email.value, message: message.value })
  );
  localStorage.getItem(localStorageKey);
});
form.addEventListener(
  'input',
  throttle(() => {
    console.log(`Input handler call every ${updateStorageTime}`);
  }, updateStorageTime)
);
//pobieramy to co zapisalismy i dodajemy do formularza
window.addEventListener('load', () => {
  // tutaj cała logika pobrania z localStorage i wrzucenia do formularza/ustawienia value
  return JSON.parse(localStorage.getItem(localStorageKey));
  if (formData) {
    email.value = formData.email;
    message.value = formData.message;
  }
});
function getSavedData() {
  try {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {};
  } catch (error) {
    console.log(`${error.email}: ${error.message}`);
  }
  localStorage.removeItem(localStorageKey.reset());
}
//usługa submit do czyszczenia localeStorage
form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(e.currentTarget.reset());
  console.log(formData);
});
