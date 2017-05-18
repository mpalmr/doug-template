const objMutate = require('./objMutate');

objMutate.a += 5;
setTimeout(() => console.log(objMutate), 100);

module.exports = (a, b) => a + b;
