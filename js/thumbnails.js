import {createPublishPhoto} from './data.js';


const listPictures = document.querySelector('.pictures');
const pictureTemplateItem = document.querySelector('#picture').content.querySelector('.picture');
const listPicturesFragment = document.createDocumentFragment();

const similarPublishPhoto = createPublishPhoto(25);

similarPublishPhoto.forEach(({url, description, comments, likes, id}) => {
  const thumbnail = pictureTemplateItem.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').textContent = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  listPicturesFragment.appendChild(thumbnail);

  return thumbnail;

});

const renderThumbnails = () => {
  listPictures.appendChild(listPicturesFragment);
};


export {similarPublishPhoto, renderThumbnails};
