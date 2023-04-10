import {isEscapeKey} from './universal.js';
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
  document.body.append(cloneElement);
};


const onEscapeClick = (evt) => {
  if(isEscapeKey(evt)) {
    containerClose ();
  }
};

let containerInner;
const onOutOfContainerClick = (evt) => {
  if(evt.target !== containerInner) {
    containerClose ();
  }
};

let button;
const onButtonClick = () => containerClose ();

let container;
function containerClose () {
  container.remove();
  document.removeEventListener('keydown', onEscapeClick);
  document.removeEventListener('click', onOutOfContainerClick);
  button.addEventListener('click', onButtonClick);
}

const getMessages = (element1,element2,element3,element4) => {
  createElementMessage(element1);
  container = document.querySelector(element3);
  containerInner = document.querySelector(element2);
  button = document.querySelector(element4);
  document.addEventListener('click', onOutOfContainerClick);
  document.addEventListener('keydown', onEscapeClick);
  button.addEventListener('click', onButtonClick);
};

const showSuccessMessage = () => getMessages('#success','.success__inner','.success','.success__button');
const showErrorMessage = () => {
  getMessages('#error','.error__inner','.error','.error__button');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

export {showAlert, showSuccessMessage, showErrorMessage};
