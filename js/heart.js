const heart = document.querySelector('.social__heart');
const likesNumber = document.querySelector('.likes-count');

const onHeartButtonClick = () => {
  if (heart.style.backgroundPosition === '-5px -81px') {
    likesNumber.textContent --;
    heart.style.backgroundPosition = '-5px -56px';
  } else {
    likesNumber.textContent ++;
    heart.style.backgroundPosition = '-5px -81px';
  }
};

heart.addEventListener('click', onHeartButtonClick);

export {onHeartButtonClick};
