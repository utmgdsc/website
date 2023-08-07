module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/jsx-runtime', 'plugin:@next/next/recommended'],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-console': 'off',
		'no-unused-vars': 'warn',
		'no-use-before-define': 'off',
	},
};
