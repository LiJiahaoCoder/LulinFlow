'use strict';

module.exports = {
  '**/*.ts?(x)': (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames.map(filename => `"${filename}"`).join(' ')}`,
    'tsc',
  ],
};
