module.exports = {
  extends: ['wesbos'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'import-order': 'off',
  },
};
