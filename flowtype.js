module.exports = {
  plugins: [
    'flowtype',
  ],
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': [1],
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/require-parameter-type': [2, { 'excludeArrowFunctions': 'expressionsOnly' }],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^([A-Z][a-zA-Z0-9$]+)$'], // Capitalize flow types
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': [1],
    'flowtype/valid-syntax': [1],
    'flowtype/require-return-type': [0], // Let flow handle this
    'flowtype/no-weak-types': [0], // This is nice in theory, but not good for rapid dev
  },
};
