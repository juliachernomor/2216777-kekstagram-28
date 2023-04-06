const ALERT_SHOW_TIME = 7000;

const isEscapeKey = (evt) => evt.key === 'Escape';
// debugger;
// const success = document.querySelector('.success');
// const successButton = document.querySelector('.success__button');

// const hideModal = () => success.classList.add('.hidden');

// successButton.addEventListener('click', () => hideModal());

// const onDocumentEscapeKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     hideModal();
//   }
// };

// document.addEventListener('keydown', onDocumentEscapeKeydown);


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

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const body = document.querySelector('body');

const showSuccessMessage = () => {
  const templateSuccess = document.querySelector('#success').content;
  const sectionSuccess = templateSuccess.querySelector('section');
  const cloneSectionSuccess = sectionSuccess.cloneNode(true);
  body.appendChild(cloneSectionSuccess);
};


const showErrorMessage = () => {
  const templateError = document.querySelector('#error').content;
  const sectionError = templateError.querySelector('section');
  const cloneSectionError = sectionError.cloneNode(true);
  body.appendChild(cloneSectionError);
};

export { isEscapeKey, showAlert, debounce, showSuccessMessage, showErrorMessage};
