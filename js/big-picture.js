

const bigPicture = document.querySelector('.big-picture');
const userModalCloseElement = bigPicture.querySelector('.cancel');

const body = document.querySelector('body');
const commentsCounter = document.querySelector('.social__comment-count');
const loadNewComments = document.querySelector('.comments-loader');


userModalCloseElement.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});


const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  loadNewComments.classList.add('hidden');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};


export {showBigPicture};
