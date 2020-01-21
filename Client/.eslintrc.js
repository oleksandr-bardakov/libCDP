module.exports = exports = {
    "extends": "airbnb",
    "rules": {
        "id-blacklist": [1, "/bind/"],
        "indent": ["error", 2, {"SwitchCase": 1}],
        "one-var": 0,
        "linebreak-style": 0,
        "no-return-assign": 0,
        "arrow-body-style": 0,
        "no-param-reassign": 0,
        "guard-for-in": 0,
        "no-restricted-syntax": 0,
        "quote-props": 0,
        "object-shorthand": 0,
        "dot-notation": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false
            }
        ],
        "no-extra-boolean-cast": 0,
        "no-lonely-if": 0,
        "no-plusplus": 0,
        "no-unneeded-ternary": 0,
        "global-require": 1,
        "no-debugger": "error",
        "no-nested-ternary": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "no-confusing-arrow": 0,
        "consistent-return":0,
        "prefer-template": 0,
        "array-callback-return": 0,
        "import/no-unresolved": false,
        "import/extensions": false,
        "import/no-named-as-default": false,
        "import/no-useless-path-segments": false,
        "import/order": false,
        "import/no-cycle": false,
        "import/no-duplicates": false,
        "no-mixed-operators": 0,
        // Legacy
        "max-len": [2, 155, 4, { "ignoreComments": true, "ignoreUrls": true }],
        "max-params": [2, 8],
        "no-bitwise": 2,
        // React
        "no-return-assign": 0,
        "react/jsx-indent-props": [2, 2],
        "react/jsx-indent": [2, 2],
        "react/prop-types": 0,
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowFunctions": false,
            "allowBind": false,
            "ignoreDOMComponents": true
            }],
        "react/jsx-filename-extension": [0],
        "react/require-default-props": 0,
        "react/jsx-wrap-multilines":0,
        "react/jsx-closing-tag-location":0,
        "react/no-unused-state": 0,
        "react/no-array-index-key": 0,
        "react/no-string-refs": 0,
        "react/no-did-update-set-state": 0,
        "react/jsx-one-expression-per-line":0,
        "import/prefer-default-export": 0,
        "react/prefer-stateless-function": 0,
        "react/button-has-type": 0,
        "react/jsx-no-target-blank": 0,
        "react/no-access-state-in-setstate": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "no-shadow": 0,
        "jsx-quotes": ["error", "prefer-single"],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/label-has-associated-control":"off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/label-has-for": "off",
        "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
        "no-unused-expressions": 0,
        "react/no-array-index-key": 0,
        "no-throw-literal": 0,
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {
        "System": true
    }
};
