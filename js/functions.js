//first task
const checklength = (string, maxLength) => (string.length <= maxLength) ? 'true' : 'false';
checklength ('проверяемая строка', 18);

//second task 1variant
const isPalindrome = (string) => {
  const stringModify = string.replaceAll(' ','').replaceAll('.','').replaceAll(',','').toLowerCase();
  return stringModify === stringModify.split('').reverse().join('');
};
isPalindrome ('Evil fit some kill like me, kill like most, if live.');

//second task 2variant
const isPalindrome1 = (string) => {
  const stringModify = string.replaceAll(' ','').replaceAll('.','').replaceAll(',','').toLowerCase();
  let stringNew = '';
  for (let i = stringModify.length - 1; i >= 0; i--) {
    stringNew += stringModify.at(i);
  }
  return stringModify === stringNew;
};
isPalindrome1('Evil fit some kill like me, kill like most, if live.');

//third task
const getNumber = (text) => {
  if (typeof text === 'number') {
    return text;
  }
  let textNew = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] <= '9' && text[i] >= '0') {
      textNew = textNew + text[i];
    }
  }
  return (textNew !== '') ? parseInt(textNew, 10) : NaN;
};
getNumber('агент 007');

//fourth task
function addString (str, count, addRow) {
  const difference = count - str.length;
  const notEnoughLength = count - str.length - addRow.length;
  if (difference > 0) {
    str = addRow.slice(0, difference) + str;
    for (let i = 0; i < notEnoughLength; i++) {
      str = addRow[0] + str;
    }
  }
  return str;
}
addString('q', 4, 'we');
