import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';

const container = document.querySelector('.pictures');
let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === Number(thumbnail.dataset.thumbnailId)
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures, container);
  container.addEventListener('click', onContainerClick);
};


export {renderGallery};

