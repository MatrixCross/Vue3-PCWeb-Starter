module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/valid-template-root': 'off',
    'vue/require-default-prop': 'off',
  },
}
