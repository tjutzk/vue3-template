module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'standard',
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended', // 将 prettier的能力集成到eslint中。按照prettier的规则检查代码规范性，并进行修复. 需要 eslint-plugin-prettier包
      'plugin:@typescript-eslint/recommended'
    ],
    parser: 'vue-eslint-parser', // eslint 支持vue文件及语法
    parserOptions: {
      ecmaVersion: 12,
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
  
    plugins: ['html', 'vue', '@typescript-eslint'],
    rules: {
      'vue/no-v-model-argument': 'off', // 'v-model' directives require no argument.eslintvue/no-v-model-argument
      'no-new': 'off',
      'no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
      'array-callback-return': 'off',
      'prettier/prettier': 'error', // 不符合 prettier 规则的代码，要进行错误提示（红线）
      '@typescript-eslint/no-non-null-assertion': 'off', //忽略非空断言警告:https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
      "vue/multi-word-component-names":"off",
    }
  }
  