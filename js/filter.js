const FILTER_PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandom = () => Math.random() - 0.5;
const sortDiscussed = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilter = () => {
  switch(currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandom).slice(0,FILTER_PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortDiscussed);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    if (evt.target.id === currentFilter) {
      return;
    }
    filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    callback(getFilter());
  });
};

const init = (data, callback) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...data];
  setOnFilterClick(callback);
};

export { init, getFilter };
