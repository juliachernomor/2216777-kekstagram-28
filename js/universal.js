// генератор случайных целых положительных чисел в заданном диапазоне, возвращает случайное число
const randomNumberGenerator = (max,min) => {
  const lower = Math.ceil(Math.min(Math.abs(max),Math.abs(min)));
  const upper = Math.floor(Math.max(Math.abs(max),Math.abs(min)));
  const result = (Math.random() * (upper - lower + 1)) + lower;
  return Math.floor(result);
};

// функция -возвращает случайный элемент массива(параметр elements - элементы массива)
const getRandomArrayElement = (elements) => elements[randomNumberGenerator(0, elements.length - 1)];

// проверка на уникальность
const createUniqueNumber = (min,max) => {
  const previousValues = [];
  return() => {
    let currentValue = randomNumberGenerator(min,max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumberGenerator(min,max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {randomNumberGenerator, getRandomArrayElement, createUniqueNumber};
