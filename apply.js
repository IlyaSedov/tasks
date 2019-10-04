const apply = (count = 1, fun, val = 0) => {
  const patternOne = /[^0-9]/,
    typCountStr = typeof count == 'string',
    typValStr = typeof val == 'string';

  if((fun == undefined)||(typeof fun!='function'))return console.log ('функция не передана')
  if ((typCountStr === true) && (count.search(patternOne) == -1)) count = Number(count);
  if ((typValStr === true) && (val.search(patternOne) == -1)) val = Number(count);
  if ((typeof count != 'number') || (typeof val != 'number')) throw new TypeError('Данные некорректны');

  if (count === 0) {
    return val;
  }

  return apply(count - 1, fun, fun(val))
};

export default apply;
