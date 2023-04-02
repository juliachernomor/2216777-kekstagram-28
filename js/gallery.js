import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';
// import {similarPublishPhoto} from './data.js';


const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === Number(thumbnail.dataset.thumbnailId)
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures);
};


export {renderGallery};

