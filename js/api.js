
import {showSuccessMessage, showErrorMessage} from './universal.js';
import {unblockSubmitButton, closeFormModalWindow} from './form.js';

const URL_GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const URL_SEND_DATA = 'https://28.javascript.pages.academy/kekstagram';

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const getData = () =>
  fetch(URL_GET_DATA, {
    method: 'GET',
    body: null
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ErrorText.GET_DATA);
    });


const sendData = (body) => {
  fetch(URL_SEND_DATA, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      closeFormModalWindow();
      showSuccessMessage();
      return response.json();
    })
    .catch(() => {
      showErrorMessage();
    })
    .finally(unblockSubmitButton);
};

export {getData, sendData};
