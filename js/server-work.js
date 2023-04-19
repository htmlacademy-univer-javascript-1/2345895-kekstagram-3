import { photoCloseEdit } from './work-form.js';


const form = document.querySelector('.img-upload__form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const pristine = new Pristine(form);
  const isValid = pristine.validate();
  const formData = new FormData(evt.target);
  if (isValid) {
    refer(formData, onSendPhotoSuccess, onSendPhotoError);
  } else {
    showError();
  }
}

function onSendPhotoSuccess() {
showSuccessMessage();
 photoCloseEdit();
}

function onSendPhotoError() {
  showError();
}

function showSuccessMessage() {
  const successMessageTemplate = document.querySelector('#success').content.cloneNode(true);
  successMessageTemplate.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
  document.body.appendChild(successMessageTemplate);
}

function closeSuccessMessage() {
  document.body.querySelector('.success').remove();
}

function showError() {
  const errorMessageTemplate = document.querySelector('#error').content.cloneNode(true);
  errorMessageTemplate.querySelector('.error__button').addEventListener('click', closeErrorMessage);
  document.body.appendChild(errorMessageTemplate);
  document.querySelector('.error').style.zIndex = '999';
}

function closeErrorMessage() {
  document.body.querySelector('.error').remove();
}

const URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';

function photolod(onSuccess, onFail) {
  fetch(URL)
    .then((response) => {
      response.json().then((photos) => onSuccess(photos));
    })
    .catch(onFail);
}

function refer(body, onSuccess, onFail) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {photolod, showError};
