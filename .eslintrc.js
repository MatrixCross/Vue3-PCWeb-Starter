module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', '.'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: true, functions: false, typedefs: false },
    ],
  },
}
