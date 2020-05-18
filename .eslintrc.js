module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }]
  }
}
