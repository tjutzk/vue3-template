module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        '@typescript-eslint',
        "vue",
        "prettier"
    ],
    "rules": {
        indent: ['error', 4],
        'vue/no-v-model-argument': 'off', // 'v-model' directives require no argument.eslintvue/no-v-model-argument
        'no-new': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
        'array-callback-return': 'off',
        'prettier/prettier': 'error', // 不符合 prettier 规则的代码，要进行错误提示（红线）
        '@typescript-eslint/no-non-null-assertion': 'off' // 忽略非空断言警告:https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    }
}
