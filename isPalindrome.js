const isPalindrome = (str) => {
  const patternOne = /[^0-9,+-]/;
  if ((typeof str !== 'string') && (typeof str !== 'number')) throw new TypeError('The data is incorrect');
  
  str = String(str).toLowerCase(); 
  str = str.replace(/[^а-яa-z0-9]/g, '');
  
  if (str.length === 0) throw new Error('empty string');
  if (str.length === 1) return true;

  const result = (count) => {
    if (count.length < 2) {
      return true;
    }
    else if (count[0] !== count[count.length - 1]) {
      return false;
    }

    return result(count.slice(1, -1));

  };
  return result(str);
};


export default isPalindrome();
