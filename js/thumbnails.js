import {createPublishPhoto} from './data.js';


const listPictures = document.querySelector('.pictures');
const pictureTemplateItem = document.querySelector('#picture').content.querySelector('.picture');
const listPicturesFragment = document.createDocumentFragment();

const similarPublishPhoto = createPublishPhoto(25);

similarPublishPhoto.forEach(({url, description, comments, likes, id}) => {
  const pictureTemplateElement = pictureTemplateItem.cloneNode(true);
  pictureTemplateElement.querySelector('.picture__img').src = url;
  pictureTemplateElement.querySelector('.picture__img').alt = description;
  pictureTemplateElement.querySelector('.picture__comments').textContent = comments.length;
  pictureTemplateElement.querySelector('.picture__likes').textContent = likes;
  pictureTemplateElement.dataset.thumbnailId = id;
  listPicturesFragment.appendChild(pictureTemplateElement);

  return pictureTemplateElement;
});

const renderThumbnails = () => {
  listPictures.appendChild(listPicturesFragment);
};

const clearRenderList = () => {
  listPictures.innerHTML = '';
};

export {renderThumbnails, clearRenderList};
