module.exports = {
  plugins: [
    'flowtype',
  ],
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': [1],
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/generic-spacing': [1, 'never'],
    'flowtype/require-parameter-type': [1, { 'excludeArrowFunctions': 'expressionsOnly' }],
    'flowtype/require-valid-file-annotation': [1, 'always'],
    'flowtype/semi': [1, 'always'],
    'flowtype/space-after-type-colon': [1, 'always'],
    'flowtype/space-before-generic-bracket': [1, 'never'],
    'flowtype/space-before-type-colon': [1, 'never'],
    'flowtype/type-id-match': [1, '^([A-Z][a-zA-Z0-9$]+)$'], // Capitalize flow types
    'flowtype/union-intersection-spacing': [1, 'always'],
    'flowtype/use-flow-type': [1],
    'flowtype/valid-syntax': [1],
    'flowtype/require-return-type': [0], // Let flow handle this
    'flowtype/no-weak-types': [0], // This is nice in theory, but not good for rapid dev
  },
};
