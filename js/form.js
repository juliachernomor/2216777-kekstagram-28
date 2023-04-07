import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import { sendData } from './api.js';

const SubmitButtonText = {
  SENDING: 'Сохраняю...',
  POSTING: 'Сохранить',
  IDLE: 'Повторить отправку',
};
const submitButton = document.querySelector('#upload-submit');
const TAG_ERROR_TEXT = 'Неправильно заполнено поле';
const COMMENT_ERROR_TEXT_MAXLENGTH = 'Длина комментария не может составлять больше 140 символов';
const MAX_TEXT_HASHTAGS = 5;
const MAX_TEXT_COMMENTS = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const uploadFileField = document.querySelector('#upload-file');
const body = document.querySelector('body');
const modalShow = document.querySelector('.img-upload__overlay');

const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const closeModalWindowButton = document.querySelector('.img-upload__cancel');

const form = document.querySelector('.img-upload__form');

//объявление pristine
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper--error',
});

////валидация  поля хэштег
const hasValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => (tags.length <= MAX_TEXT_HASHTAGS);

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag)=>tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(hasValidTag);
};

pristine.addValidator(
  hashtagsField,
  validateTags,
  TAG_ERROR_TEXT
);
//валидация  поля textarea
const validateCommentMax = (value) => value.length <= MAX_TEXT_COMMENTS;

pristine.addValidator(
  commentField,
  validateCommentMax,
  COMMENT_ERROR_TEXT_MAXLENGTH
);


//открывает модальное окно + блокирует скролл + добавляет обр.событ
const openModalWindow = () => {
  modalShow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  submitButton.textContent = SubmitButtonText.POSTING;
};

//закрывает модальное окно+удал.обработчик события
const closeFormModalWindow = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  modalShow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

//закрывает  при нажатии Escape условии, что поля хэш и текстареа не активны
function onDocumentEscapeKeydown (evt) {
  if (evt.key === 'Escape' && !(document.activeElement === hashtagsField || document.activeElement === commentField)) {
    evt.preventDefault();
    closeFormModalWindow();
  }
}

//обработчик события -  закрытие кнопке х
closeModalWindowButton.addEventListener('click', closeFormModalWindow);

//при изменении файла сработает  обработчик
uploadFileField.addEventListener('change', () => openModalWindow());

//
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

// отправка формы
const formSubmit = () => {
  form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target));
    }
  });
};


export {formSubmit, closeFormModalWindow, unblockSubmitButton, onDocumentEscapeKeydown};
