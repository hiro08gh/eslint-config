module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  }
};
