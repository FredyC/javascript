import bestPractices from './rules/best-practices';
import errors from './rules/errors';
import style from './rules/style';
import variables from './rules/variables';
import es6 from './rules/es6';

const config = {
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	rules: {
		'indent': ['error', 'tab'],
		'no-unused-vars': 'warn',
		'semi': ['error', 'never'],
		'quotes': ['warn', 'single', {
			avoidEscape: true, allowTemplateLiterals: true,
		}],
		'no-use-before-define': ['error', 'nofunc'],
		'no-tabs': 'off',
	}
}

export default [bestPractices, errors, style, variables, es6, config];
