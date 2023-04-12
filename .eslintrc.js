// @ts-check
module.exports =
  /** @type {import('eslint').Linter.BaseConfig} */
  ({
    extends: ['plugin:@docusaurus/recommended'],
    rules: {
      '@docusaurus/string-literal-i18n-messages': 'error',
      '@docusaurus/no-untranslated-text': 'warn',
    },
    overrides: [],
  });
