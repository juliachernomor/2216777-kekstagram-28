// import { createComments } from './data.js';
import {isEscapeKey} from './universal.js';
const bigPicture = document.querySelector('.big-picture');
// const commentList = bigPicture.querySelector('.social__comments');

// const renderOnlyComments = (comments) => {
//   commentList.innerHTML = '';
//   const fragment = document.createDocumentFragment();
//   comments.forEach((comment) => {
//     const commentElement = createComments(comment);
//     fragment.append(commentElement);

//   });
//   commentList.append(fragment);

// };


const renderPictureComments = ({url, description, likes, comments}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

const userModalCloseElement = bigPicture.querySelector('.cancel');

const body = document.querySelector('body');
const commentsCounter = document.querySelector('.social__comment-count');
const loadNewComments = document.querySelector('.comments-loader');

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

userModalCloseElement.addEventListener('click', () => closeUserModal ());

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  loadNewComments.classList.add('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  renderPictureComments(data);
  renderOnlyComments(data.comments);
};

export {showBigPicture};
