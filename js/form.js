import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {isEscapeKey} from './universal.js';

const TAG_ERROR_TEXT = 'Неправильно заполнено поле';
const COMMENT_ERROR_TEXT_MAXLENGTH = 'Длина комментария не может составлять больше 140 символов';
const MAX_TEXT_HASHTAGS = 5;
const MAX_TEXT_COMMENTS = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const SubmitButtonText = {
  SENDING: 'Сохраняю...',
  POSTING: 'Сохранить',
  IDLE: 'Повторить отправку',
};

const body = document.body;
const submitButton = document.querySelector('#upload-submit');
const uploadFileField = document.querySelector('#upload-file');
const modalShow = document.querySelector('.img-upload__overlay');
const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const closeModalWindowButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper--error',
});

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

const validateCommentMax = (value) => value.length <= MAX_TEXT_COMMENTS;

pristine.addValidator(
  commentField,
  validateCommentMax,
  COMMENT_ERROR_TEXT_MAXLENGTH
);

const openModalWindow = () => {
  modalShow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  submitButton.textContent = SubmitButtonText.POSTING;
};

const closeFormModalWindow = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  modalShow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

function onDocumentEscapeKeydown (evt) {
  if (isEscapeKey && !(document.activeElement === hashtagsField || document.activeElement === commentField)) {
    evt.preventDefault();
    closeFormModalWindow();
  }
}

closeModalWindowButton.addEventListener('click', closeFormModalWindow);
uploadFileField.addEventListener('change', openModalWindow);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

form.addEventListener('submit',(evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        closeFormModalWindow();
        showSuccessMessage();
      })
      .catch(() => {
        showErrorMessage();
      })
      .finally(unblockSubmitButton);
  }
});

export {closeFormModalWindow, unblockSubmitButton, onDocumentEscapeKeydown,};
