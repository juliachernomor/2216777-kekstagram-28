//first task
const checklength = (string, maxLength) => (string.length <= maxLength) ? 'true' : 'false';
checklength ('проверяемая строка', 18);

//second task 1variant
const isPalindrome = (string) => {
  const stringModify = string.toLowerCase().replace(/[\s.,%]/g,'');
  return stringModify === stringModify.split('').reverse().join('');
};
isPalindrome ('Evil fit some kill like me, kill like most, if live.');

//second task 2variant
const isPalindrome1 = (string) => {
  const stringModify = string.toLowerCase().replace(/[^а-яa-z1-9]/gi,'');
  let stringNew = '';
  for (let i = stringModify.length - 1; i >= 0; i--) {
    stringNew += stringModify.at(i);
  }
  return stringModify === stringNew;
};
isPalindrome1('Evil fit some kill like me, kill like most, if live.');

//third task1
const getNumber = (text) => {
  if (typeof text === 'number') {
    return text;
  }
  let textNew = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] <= '9' && text[i] >= '0') {//text[i]  будет равно числовому символу или 0
      textNew = textNew + text[i];
    }
  }
  return (textNew !== '') ? parseInt(textNew, 10) : NaN;
};
getNumber('агент 007');

//third task2
const getNumber1 = (text) => parseInt(text.replace(/[^\d]/g, ''), 10);
getNumber1('кефир, батона001');

//fourth task
const addString = (str, count, addRow) =>{
  let strModify = str;
  const difference = count - str.length;
  const notEnoughLength = count - str.length - addRow.length;
  if (difference > 0) {
    strModify = addRow.slice(0, difference) + str;
    for (let i = 0; i < notEnoughLength; i++) {
      strModify = addRow[0] + strModify;
    }
  }return strModify;
};
addString('q', 4, 'we');
