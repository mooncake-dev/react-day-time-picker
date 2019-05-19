'use strict';

/**
 * Setup requires .babelrc and Babel for Jest to work properly.
 * @see https://jestjs.io/docs/en/tutorial-react#setup-without-create-react-app
 */

// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  browser: true,
  collectCoverage: false, // collect coverage by running "npm run test:coverage"
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.cache/', '/dev/', '/dist/'],
  coverageDirectory: 'coverage'
};
