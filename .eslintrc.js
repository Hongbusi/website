module.exports = {
  // 此项是用来告诉 eslint 找当前配置文件不能往父级查找
  root: true,
  // 全局环境
  env: {
    node: true
  },
  // 指定如何解析语法。可以为空，但若不为空，只能配该值
  parser: 'vue-eslint-parser',
  // 优先级低于 parse 的语法解析配置
  parserOptions: {
    // 指定 ESLint 的解析器
    parser: '@typescript-eslint/parser',
    // 允许使用 ES 语法
    ecmaVersion: 2020,
    // 允许使用 import
    sourceType: 'module',
    // 允许解析JSX
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ]
};
