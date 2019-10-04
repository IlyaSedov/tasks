const apply = (count, fun, val) => {
  const patternOne = /^\d*$/,
    typCountStr = typeof count == 'string',
    typValStr = typeof val == 'string';
  
  if (val === undefined) return console.log('одно или несколько значений не переданы')
  if ((fun === undefined) || (typeof fun != 'function')) return console.log('функция не передана')
  if ((typCountStr === true) && (count.search(patternOne) >= 0)) count = Number(count);
  if ((typValStr === true) && (val.search(patternOne) >= 0)) val = Number(count);
  if ((typeof count != 'number') || (typeof val != 'number')) throw new TypeError('Данные некорректны');
  if (count < 0) count = 0;

  if (count === 0) {
    return val;
  }

  return apply(count - 1, fun, fun(val))
};


export default apply;
