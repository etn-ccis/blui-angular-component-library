module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [ '@pxblue/eslint-config/ts' ],
  parserOptions:  {
    project: "./config/tsconfig.json",
  },
  env: {
    browser: true
  }
};
