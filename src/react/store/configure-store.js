
if (process.env.NODE_ENV === 'prodoction') {
  module.exports = require('./configure-store.prod');
} else {
  module.exports = require('./configure-store.dev');
}
