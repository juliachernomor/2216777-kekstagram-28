
const listPictures = document.querySelector('.pictures');
const pictureTemplateItem = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createThumbnail = ({url, description, comments, likes, id}) => {
  const thumbnail = pictureTemplateItem.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').textContent = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const renderThumbnails = (pictures) => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.appendChild(thumbnail);

  });
  listPictures.append(fragment);
};

export {renderThumbnails};
