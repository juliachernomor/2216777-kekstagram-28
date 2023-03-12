import {createPublishPhoto} from './data.js';

const listPictures = document.querySelector('.pictures');
const pictureTemplateItem = document.querySelector('#picture').content.querySelector('.picture');
const listPicturesFragment = document.createDocumentFragment();

const similarPublishPhoto = createPublishPhoto(25);

similarPublishPhoto.forEach(({url, description, comments, likes}) => {
  const pictureTemplateElement = pictureTemplateItem.cloneNode(true);
  pictureTemplateElement.querySelector('.picture__img').src = url;
  pictureTemplateElement.querySelector('.picture__img').alt = description;
  pictureTemplateElement.querySelector('.picture__comments').textContent = comments.length;
  pictureTemplateElement.querySelector('.picture__likes').textContent = likes;
  listPicturesFragment.appendChild(pictureTemplateElement);
});

const renderThumbnails = () => {
  listPictures.appendChild(listPicturesFragment);
};

export {renderThumbnails};
