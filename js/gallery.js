import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';


const container = document.querySelector('.pictures');


const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures, container);
};

export {renderGallery};

