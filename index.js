var mergeWith = require('lodash.mergewith');

var mergeConcat = (...args) => {
  return mergeWith({}, ...args, (a, b) => {
    if (Array.isArray(a)) {
      return a.concat(b);
    }
  });
};

module.exports = mergeConcat(
  require('./base.js'),
  require('./react.js'),
  require('./flowtype.js')
);
