
import {clearRenderList} from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const userModalCloseElement = document.querySelector('.cancel');
const commentsCounter = document.querySelector('.social__comment-count');
const loadNewComments = document.querySelector('.comments-loader');

const onDocumentEscKeydown = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal () {
  bigPicture.classList.add('hidden');
  clearRenderList();
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  loadNewComments.classList.add('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown());
  userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
  });
};

export {showBigPicture};
