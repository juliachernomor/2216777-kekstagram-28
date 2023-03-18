import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';
import {similarPublishPhoto} from './thumbnails.js';


const container = document.querySelector('.pictures');


const renderGallery = () => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const picture = similarPublishPhoto.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
  renderThumbnails();
};


export {renderGallery};

