import {loadComments} from './load-comments.js';
import {isEscapeKey} from './universal.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const commentListItem = bigPicture.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const userModalCloseElement = bigPicture.querySelector('.cancel');
const pictureUrl = bigPicture.querySelector('.big-picture__img').querySelector('img');
const pictureDescription = bigPicture.querySelector('.social__caption');
const pictureLikes = bigPicture.querySelector('.likes-count');
const body = document.body;

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

const renderPictureComments = ({url, description, likes}) => {
  pictureUrl.src = url;
  pictureDescription.textContent = description;
  pictureLikes.textContent = likes;

};

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
}

userModalCloseElement.addEventListener('click', () => closeUserModal ());

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  renderComments(data.comments);
  renderPictureComments(data);
  loadComments();
};

export {showBigPicture};
