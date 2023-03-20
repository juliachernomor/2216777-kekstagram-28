const COMMENT_SHOW_COUNT = 5;
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentListItem = bigPicture.querySelector('.social__comment');
commentListItem.classList.add('hidden');

const loadComments = () => {
  const hiddenComments = commentList.querySelectorAll('.hidden');
  if (hiddenComments.length > COMMENT_SHOW_COUNT) {
    showComments(hiddenComments, COMMENT_SHOW_COUNT);
  } else if(hiddenComments.length <= COMMENT_SHOW_COUNT) {
    showComments(hiddenComments,hiddenComments.length);
    commentsLoader.classList.add('hidden');
  }
};

function showComments (hiddenComments, count) {
  for (let i = 0; i < count; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  commentsCount.textContent = `${commentList.children.length - commentList.querySelectorAll('.hidden').length} из ${commentList.children.length} комментариев`;
}


commentsLoader.addEventListener('click', loadComments);

export {loadComments};
