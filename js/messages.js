import {isEscapeKey} from './big-picture.js';
import {onDocumentEscapeKeydown} from './form.js';

const ALERT_SHOW_TIME = 7000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.zIndex = '100';
  alert.style.position = 'absolute';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const createElementMessage = (selector) => {
  const template = document.querySelector(selector).content;
  const sectionElement = template.querySelector('section');
  const cloneElement = sectionElement.cloneNode(true);
  document.body.appendChild(cloneElement);
};

const showSuccessMessage = () => {
  createElementMessage('#success');
  const successInner = document.querySelector('.success__inner');
  const success = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      success.remove();
    }
  });
  successButton.addEventListener('click',() => success.remove());
  document.addEventListener('click', (evt) => {
    if(evt.target !== successInner) {
      success.remove();
    }
  });
};

const showErrorMessage = () => {
  createElementMessage('#error');
  const errorInner = document.querySelector('.error__inner');
  const error = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  document.removeEventListener('keydown', onDocumentEscapeKeydown);
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      error.remove();
    }
  });
  errorButton.addEventListener('click',() => error.remove());
  document.addEventListener('click',(evt) => {
    if(evt.target !== errorInner) {
      error.remove();
    }
  });
};

export {showAlert, showSuccessMessage, showErrorMessage};
