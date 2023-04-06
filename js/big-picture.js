import {isEscapeKey} from './universal.js';
import {loadComments} from './load-comments.js';


const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const commentListItem = bigPicture.querySelector('.social__comment');
commentListItem.classList.add('hidden');

const renderComments = (comments) => {
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = commentListItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentList.append(newComment);
  });
};

const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');


const renderPictureComments = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

const userModalCloseElement = bigPicture.querySelector('.cancel');


const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const body = document.querySelector('body');

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

userModalCloseElement.addEventListener('click', () => closeUserModal ());


const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  renderPictureComments(data);
  renderComments(data.comments);
  loadComments();
};

export {showBigPicture};
