'use strict';

module.exports = {
  '**/*.ts?(x)': (filename) => [
    `env NODE_ENV=production eslint --fix ${filename.join(' ')}`,
  ],
};
