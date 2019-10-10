const substr = (str, firstIndex = 0, strLength = str.length) => {
  let a = '';

  firstIndex = Number(firstIndex);
  strLength = Number(strLength);

  if (typeof str !== 'string') return 'Некорректные данные';
  if (str.length === 0 || strLength === 0 || firstIndex > str.length) return '';
  if (strLength < 0) strLength = 1;
  if (firstIndex < 0) firstIndex = 0;
  if ((firstIndex + strLength) > str.length) strLength = str.length - firstIndex;

  for (let i = firstIndex; i < (firstIndex + strLength); i++) {
    a += str[i];
  }

  return a;
};

export default substr();
