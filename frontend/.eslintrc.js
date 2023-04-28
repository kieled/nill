module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
}
