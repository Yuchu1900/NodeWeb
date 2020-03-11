module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        //禁用对象console，但是允许console.warn(),console.error(),console.info()这三个方法可以使用
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        //语句结尾必须加分号
        "semi": [
            "error",
            "always"
        ],
        //引号要用双引号
        "quotes": [
            "error",
            "double"
        ],
        //语句缩进必须四个空格
        "indent": [
            "error",
            4
        ],
        //换行使用unix样式
        "linebreak-style": [
            "warn",
            "unix"
        ]
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "globals": {
        "window": true
    },
    // "plugins": [
    //     "react",
    //     "@typescript-eslint"
    // ],
    "env": {
        "browser": false,
        "es6": true,
        "node": true,
        "mocha": true
    }
};
