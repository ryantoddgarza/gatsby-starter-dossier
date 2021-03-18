const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'prettier',
  ],
  plugins: ['import'],
  rules: {
    'import/prefer-default-export': off,
    'no-unreachable': error,
    'no-useless-return': error,
    // 'prettier/prettier': error,
    'quote-props': [error, 'consistent'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
