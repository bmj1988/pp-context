function allTheArgs(func, ...args) {
  const newFunc = func.bind(null, ...args)
  return newFunc
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
