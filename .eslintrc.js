module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    //https://github.com/standard/eslint-config-standard-with-typescript
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
        'standard-with-typescript',
    ],
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    //自定义规则表 --》 https://eslint.bootcss.com/docs/rules/
    "rules": {
        // 要求箭头函数的参数使用圆括号
        'arrow-parens': 0,
        // 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
