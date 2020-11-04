'use strict';

module.exports = {
  '**/*.tsx?': (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
    'tsc',
  ],
};
