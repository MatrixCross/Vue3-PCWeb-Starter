module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'ts',
    'jsx',
    'tsx',
    'json',
    // tell Jest to handle *.vue files
    'vue',
  ],
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
