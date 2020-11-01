'use strict';

module.exports = {
  '**/*.ts?(x)': (filename) => [
    `env NODE_ENV=production tslint --fix ${filename.join(' ')}`,
  ],
};
