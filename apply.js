const apply = (count, fun, val) => {
  const patternOne = /^\d*$/,
    typCountStr = typeof count === 'string',
  
  if (val === undefined) return console.log('one or more values are not passed')
  if ((fun === undefined) || (typeof fun != 'function')) return console.log('the function is not passed')
  if ((typCountStr === true) && (count.search(patternOne) >= 0)) count = Number(count);
  if (typeof count != 'number') throw new TypeError('The data is incorrect');
  if (count < 0) count = 0;
  if ((count ^ 0) !== count) count = Number(count.toFixed());

  if (count === 0) {
    return val;
  }

  return apply(count - 1, fun, fun(val))
};


export default apply;
