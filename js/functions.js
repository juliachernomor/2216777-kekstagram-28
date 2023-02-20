//first task
function lengthRow (row) {
  const length = row.length;
  if (length >= 10) {
    return true;
  }
  return false;
}
lengthRow ('Абра-кадабра');

//second task 1
function getPalindrome (text) {
  const examineText = text.replaceAll(' ','').replaceAll('.','').replaceAll(',','').toUpperCase();
  const reverseExamineText = examineText.split('').reverse().join('');
  if (examineText === reverseExamineText) {
    return true;
  }
  return false;
}
getPalindrome ('Evil fit some kill like me, kill like most, if live.');

//second task 2
function getPalindrome1 (examineText) {
  let examineTextNew = '';
  for (let i = examineText.length; i >= 0; i--) {
    examineTextNew = examineTextNew + examineText[i];
  }
  const result = (examineText.toUpperCase === examineTextNew.toUpperCase) ? 'true' : 'false';
  return result;
}
getPalindrome1('Evil fit some kill like me, kill like most, if live.');

//third task
function getNumber (text) {
  let textNew = '';
  for (let i = 0; i < text.length; i++) {
    if (typeof 'string' && text[i] <= '9' && text[i] >= '0') {
      textNew = textNew + text[i];
    }
  }
  const result = (textNew !== '') ? textNew : NaN;
  return result;
}
getNumber('gff3557fh8');

//fourth task
function addString (str, count, addRow) {
  const difference = count - str.length;
  if (difference > 0) {
    str = addRow.slice(0, difference) + str;
  }
  const notEnoughLength = count - str.length;
  if (notEnoughLength > 0) {
    for (let i = 0; i < notEnoughLength; i++) {
      str = addRow[0] + str;
    }
  }
  return str;
}
addString('q', 4, 'we');
