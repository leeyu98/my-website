// @ts-check
module.exports =
  /** @type {import('prettier').Options} */
  ({
    /** 与 ESLint 协调, 适应 ESLint 的规则 */
    eslintIntegration: true,

    /** 是否使用单引号 */
    singleQuote: true,

    /** 尾部追加逗号 */
    trailingComma: 'es5',

    /** 折行长度 */
    printWidth: 120,

    /** TAB 长度 */
    tabWidth: 2,

    /** 对象内部前后追加空格 */
    bracketSpacing: true,

    /** 是否在 JSX 中使用单引号 */
    jsxSingleQuote: false,

    overrides: [],
  });
