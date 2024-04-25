import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['*.sh', '**/*.sh/**', 'node_modules', '**/node_modules/**', 'lib', '**/lib/**', '*.md', '**/*.md/**', '*.woff', '**/*.woff/**', '*.ttf', '**/*.ttf/**', '.vscode', '**/.vscode/**', '.idea', '**/.idea/**', 'dist/', 'dist/**/', 'public', 'public/**', 'docs', 'docs/**', '.local', '**/.local/**', '!.env-config.ts', '!**/.env-config.ts/**', 'components.d.ts', '**/components.d.ts/**'],
  formatters: {
    prettierOptions: {
      // 字符串使用单引号
      singleQuote: true,
      // 每行末尾自动添加分号
      semi: false,
      // tab缩进大小,默认为2
      tabWidth: 2,
      // 使用tab缩进，默认false
      useTabs: false,
      // 对象中打印空格 默认true
      // true: { foo: bar }
      // false: {foo: bar}
      bracketSpacing: true,
      // 箭头函数参数括号 默认avoid 可选 avoid| always
      // avoid 能省略括号的时候就省略 例如x => x
      // always 总是有括号
      arrowParens: 'avoid',
      // 换行长度，默认80
      printWidth: 80,
      jsxBracketSameLine: true,
    },
  },
  unocss: true,
  vue: true,
})
