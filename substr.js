const substr = (str, startIndex = 0, lengthStr = str.length) => {
  let finishSubstr = '';
  
  if (typeof str !== 'string') throw new TypeError('The data is incorrect');
  if ((str.length === 0) || (startIndex > str.length) || (lengthStr === 0)) return console.log(''); 
  if (lengthStr < 0) lengthStr = 1;
  if (startIndex < 0) startIndex = 0;
  if ((startIndex + lengthStr - 1) > str.length) lengthStr = str.length - startIndex;
  
  for (let i = startIndex; i < (startIndex + lengthStr); i++) {
    finishSubstr += str[i];
  }

  return finishSubstr;
};

export default substr;
