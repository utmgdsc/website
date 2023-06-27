module.exports = {
  env: {
    browser: true,
		es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'react-app'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off'
  }
}
