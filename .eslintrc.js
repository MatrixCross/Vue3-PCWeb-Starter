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
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'vue-router',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'vuex',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'pinia',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'naive-ui',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/config',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/settings',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/enum',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/plugins',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/layouts',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/views',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/router',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/store',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/composables',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/service',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/utils',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/assets',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/interface',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'vue',
          'vue-router',
          'vuex',
          'pinia',
          'naive-ui',
        ],
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['uno.css', '~icons/*'] }],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'acc', 'e'],
      },
    ],
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
