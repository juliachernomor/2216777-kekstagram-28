import {randomNumberGenerator, getRandomArrayElement, createUniqueNumber} from './universal.js';

const ID_PHOTO_COUNT = 25;
const URL_PHONO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 300;
const DESCRIPTIONS = [
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
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Да что вы можете знать об этом? увиденное заставляет уйти мыслями в воспоминания',
  'Наталкивает на размышления, да?'
];

// обращение к внутренней функции проверки на уникальность
const uniqueCommentId = createUniqueNumber(1,COMMENT_COUNT);
const uniquePhotoId = createUniqueNumber(1,ID_PHOTO_COUNT);
const uniquePhotoUrl = createUniqueNumber(1, URL_PHONO_COUNT);

// объект 2
const createComments = (uniqueCommentAvatar, uniqueCommentMessage) => ({
  id: uniqueCommentId(),
  avatar: `img/avatar-${uniqueCommentAvatar()}.svg`,
  message: MESSAGES[uniqueCommentMessage],
  name: getRandomArrayElement(NAMES),
});

const createRandomNumber = () => {
  const uniqueCommentMessage = createUniqueNumber (0,7);
  const uniqueCommentAvatar = createUniqueNumber (1,AVATAR_COUNT);
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
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: randomNumberGenerator(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: createRandomNumber(),
});

// массив из объектов 1
const similarPublishPhoto = Array.from({length:25}, publishPhoto);


export {similarPublishPhoto};


