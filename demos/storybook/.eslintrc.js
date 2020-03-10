module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@pxblue/eslint-config/ts' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    },
    rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    }
};
