module.exports = {
  // 一行代码的最大字符数, 默认是 80(printWidth: <int>)
  printWidth: 100,
  // tab 宽度为 2 空格 (tabWidth: <int>)
  tabWidth: 2,
  // 是否使用 tab 来缩进, 我们使用空格 (useTabs: <bool>)
  useTabs: false,
  // 结尾是否添加分号, false 的情况下只会在一些导致 ASI 错误的其工况下在开头加分号, 我选择无分号结尾的风格 (semi: <bool>)
  semi: false,
  // 使用单引号 (singleQuote: <bool>)
  singleQuote: true,
  // object 对象中 key 值是否加引号 (quoteProps: "<as-needed|consistent|preserve>") as-needed 只有在需求要的情况下加引号, consistent 是有一个需要引号就统一加, preserve 是保留用户输入的引号
  quoteProps: 'as-needed',
  // 在 jsx 文件中的引号需要单独设置 (jsxSingleQuote: <bool>)
  jsxSingleQuote: false,
  // 尾部逗号设置, es5 是尾部逗号兼容 es5, none 就是没有尾部逗号, all 是指所有可能的情况, 需要 node8 和 es2017 以上的环境 (trailingComma: "<es5|none|all>")
  trailingComma: 'es5',
  // object 对象里面的 key 和 value 值和括号间的空格 (bracketSpacing: <bool>)
  bracketSpacing: true,
  // jsx 标签多行属性写法时, 尖括号是否另起一行 (jsxBracketSameLine: <bool>)
  jsxBracketSameLine: false,
  // 箭头函数单个参数的情况是否省略括号, 默认 always 是总是带括号 (arrowParens: "<always|avoid>")
  arrowParens: 'avoid',
  // range 是 format 执行的范围, 可以选执行一个文件的一部分, 默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
  rangeStart: 0,
  rangeEnd: Infinity,
  // vue script 和 style 标签中是否缩进, 开启可能会破坏编辑器的代码折叠
  vueIndentScriptAndStyle: false,
  // endOfLine: "<lf|crlf|cr|auto>" 行尾换行符, 默认是lf
  endOfLine: 'lf',
  // embeddedLanguageFormatting: "off", 默认是 auto, 控制被引号包裹的代码是否进行格式化
  embeddedLanguageFormatting: 'off'
}
