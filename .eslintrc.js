module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    quotes: 0,
      semi: ['error', 'always'],
      'generator-star-spacing': 0,
      'no-mixed-spaces-and-tabs': 0,
      'no-tabs': 0,
      'prefer-promise-reject-errors': 0,
      'func-call-spacing': 0,
      'arrow-spacing': 0,
      'space-before-function-paren': 0,
      'space-unary-ops': 0,
      'keyword-spacing': 0,
      'key-spacing': 0,
      'comma-spacing': 0,
      'object-curly-spacing': 0,
      'no-unneeded-ternary': 0,
      'space-infix-ops': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'arrow-spacing': 1,
      'no-duplicate-imports': 1,
      'indent': [1, 4],
      'constructor-super': 0,
      'no-class-assign': 0,
      'no-dupe-class-members': 0,
      'require-yield': 0,
      'no-cond-assign': 2,
      'comma-dangle': [1, 'never'],
      'no-dupe-args': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-empty': 2,
      'no-irregular-whitespace': 2,
      'no-sparse-arrays': 2,
      'no-unreachable': 2,
      'use-isnan': 2,
      'default-case': 2,
      'no-empty-function': 2,
      'no-empty-pattern': 2,
      'no-eval': 2,
      'no-fallthrough': 2,
      'no-proto': 2,
      'no-self-compare': 2,
      'no-self-assign': 2,
      'no-self-assign': 2,
      'no-unused-expressions': 0,
      'comma-style': [2, 'last'],
      'new-cap': [2, {
          'newIsCap': true,
          'capIsNew': false
      }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
