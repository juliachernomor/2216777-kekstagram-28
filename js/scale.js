const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const valueScaleElement = document.querySelector('.scale__control--value');
const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imgPreviewElement.style.transform = `scale(${value / 100})`;
  valueScaleElement.value = `${value}%`;
};

const onButtonDecreaseClick = () => {
  const currentValue = parseInt(valueScaleElement.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onButtonIncreaseClick = () => {
  const currentValue = parseInt(valueScaleElement.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleButtonSmaller.addEventListener('click', onButtonDecreaseClick);
scaleButtonBigger.addEventListener('click', onButtonIncreaseClick);

export {resetScale};
