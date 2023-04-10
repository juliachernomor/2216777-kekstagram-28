
const listPictures = document.querySelector('.pictures');
const pictureTemplateItem = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();


const createThumbnail = ({url, description, comments, likes, id}) => {
  const thumbnail = pictureTemplateItem.cloneNode(true);
  const thumbnailPicture = thumbnail.querySelector('.picture__img');
  thumbnailPicture.src = url;
  thumbnailPicture.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const cleanThumbnails = () => document.querySelectorAll('.picture').forEach((element) => element.remove());

const renderThumbnails = (pictures) => {
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  listPictures.append(fragment);
};

export {renderThumbnails, cleanThumbnails};
