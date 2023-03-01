const DESCRIPTION = [
  'Эта фотография передает солнечное настроение и позитивные эмоции',
  'Фотография, как вид изобразительного искусства.Обратите внимание на "ньюансы"  фотографии',
  'Лучший кадр!',
  'Удалось запечатлеть прекрасные моменты',
  'О чем тебе говорит этот снимок?',
  'Изумительная четкость.'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Софья',
  'Мария',
  'Ксения',
  'Анастасия',
  'Инга',
  'Жанна',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Да что вы можете знать об этом? увиденное заставляет уйти мыслями в воспоминания',
  'Наталкивает на размышления, да?'
];

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

// обращение к внутренней функции проверки на уникальность
const uniqueCommentId = createUniqueNumber(1,1000);
const uniquePhotoId = createUniqueNumber(1,25);
const uniquePhotoUrl = createUniqueNumber(1,25);


// объект 2
const createComments = (uniqueCommentAvatar, uniqueCommentMessage) => ({
  id: uniqueCommentId(),
  avatar: `img/avatar-${uniqueCommentAvatar()}.svg`,
  message: MESSAGE[uniqueCommentMessage()],
  name: getRandomArrayElement(NAMES),
});

const creareRandomNumber = () => {
  const uniqueCommentMessage = createUniqueNumber (0,7);
  const uniqueCommentAvatar = createUniqueNumber (1,6);
  const countNumber = randomNumberGenerator(1,6);
  const comments = [];
  for (let i = 0; i < countNumber; i++) {
    comments[i] = createComments(uniqueCommentAvatar, uniqueCommentMessage);
  }
  return comments;
};

// объект 1
const publishPhoto = () => ({
  id: uniquePhotoId(),
  url: `photos/${uniquePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: randomNumberGenerator(15,200),
  comments: creareRandomNumber(),
});

// массив из объектов 1
const similarPublishPhoto = Array.from({length:25}, publishPhoto);

// eslint-disable-next-line no-console
console.log(similarPublishPhoto);


