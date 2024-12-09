import globals from 'globals';
import eslint from '@eslint/js';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import pluginNext from '@next/eslint-plugin-next';

const eslintConfig = [
	eslint.configs.recommended,
	pluginPromise.configs['flat/recommended'],
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: ['./jsconfig.json'],
			},
		},
	},
];

export default eslintConfig;
