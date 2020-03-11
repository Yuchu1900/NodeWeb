module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }]
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
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    }
};
