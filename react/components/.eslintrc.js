module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@pxblue/eslint-config/tsx' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true,
        jest: true
    },
    rules: {
        "@typescript-eslint/no-empty-function": "off",
        "no-empty-function": "off"
    }
};
