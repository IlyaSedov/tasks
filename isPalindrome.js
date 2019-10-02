const isPalindrome = (str) => {
  if ((typeof str !== 'string') && (typeof str !== 'number')) throw new TypeError('Данные некорректны');
  
  str = String(str);
  
  if (str.length === 0) return 'Пустая строка';
  if (str.length == 1) return true;
  const result = (count) => {
    if (count.length < 2) {
      return true;
    }
    if (count[0] !== count[count.length - 1]) {
      return false;
    }

    return result(count.slice(1, -1));
  };
  
  return result(str);
};

export default isPalindrome();
