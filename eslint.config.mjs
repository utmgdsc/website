import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	eslint.configs.recommended,
	pluginPromise.configs['flat/recommended'],
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',

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
