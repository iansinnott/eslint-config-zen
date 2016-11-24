module.exports = {
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    // Core
    'indent': [2, 2],
    'no-console': [0],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single'],
    'semi': [1, 'always'],
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
  },
};
