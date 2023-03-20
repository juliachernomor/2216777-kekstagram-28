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
    for (let i = 0; i < COMMENT_SHOW_COUNT; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
    commentsCount.textContent = `${commentList.children.length - commentList.querySelectorAll('.hidden').length} из ${commentList.children.length} комментариев`;
  } else if(hiddenComments.length <= COMMENT_SHOW_COUNT) {

    for (let i = 0; i < hiddenComments.length; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
    commentsCount.textContent = `${commentList.children.length - commentList.querySelectorAll('.hidden').length} из ${commentList.children.length} комментариев`;
    commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', loadComments);

export {loadComments};
