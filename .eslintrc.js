module.exports = {
	root: true,
	ignorePatterns: [
		'aem/',
		'dist/',
	],
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
	],
	parserOptions: {
		// parser: 'babel-eslint',
		sourceType: 'module',
		// ecmaVersion: 11,
	},
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	rules: {

		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],

		'vue/no-unused-vars': 'off',
		'vue/no-unused-components': 'warn',

		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'MemberExpression': 'off',
		}],
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'only-multiline',
		}],
		'no-cond-assign': ['error', 'always'],
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-alert': 'warn',
		'no-undef': 'off', // warn
		'no-unused-vars': ['warn', {
			'varsIgnorePattern': '^(context)$',
			'vars': 'local',
			'args': 'none',
			'ignoreRestSiblings': true,
		}],

		'no-var': ['error'],

		'no-await-in-loop': ['error'],
		'no-promise-executor-return': ['error'],
		'no-template-curly-in-string': ['warn'],
		'no-unsafe-optional-chaining': ['error'],
		'require-atomic-updates': ['error'],

		// best practice
		'array-callback-return': ['error'],
		'accessor-pairs': ['error'],
		'block-scoped-var': ['error'],
		'curly': ['error', 'multi-line', 'consistent'],
		'default-param-last': ['error'],
		'dot-location': ['error', 'property'],
		'grouped-accessor-pairs': ['error'],
		'no-constructor-return': ['error'],
		'no-div-regex': ['error'],
		'no-empty-function': ['warn', {
			'allow': ['methods', 'generatorMethods', 'getters', 'setters', 'constructors'],
		}],
		'no-eq-null': ['error'],
		'no-extend-native': ['error'],
		'no-extra-bind': ['warn'],
		'no-floating-decimal': ['error'],
		'no-implicit-globals': ['error'],
		'no-implied-eval': ['error'],
		'no-invalid-this': ['error'],
		'no-iterator': ['error'],
		'no-labels': ['error'],
		'no-lone-blocks': ['error'],
		'no-multi-spaces': ['error'],
		'no-loop-func': ['error'],
		'no-multi-str': ['error'],
		'no-new': ['error'],
		'no-new-func': ['error'],
		'no-new-wrappers': ['error'],
		'no-octal': ['error'],
		'no-octal-escape': ['error'],
		'no-param-reassign': ['error'],
		'no-proto': ['error'],
		'no-return-assign': ['error', 'always'],
		'no-return-await': ['error'],
		'no-script-url': ['error'],
		'no-self-compare': ['error'],
		'no-sequences': ['error'],
		'no-throw-literal': ['error'],
		'no-unmodified-loop-condition': ['error'],
		'no-unused-expressions': ['warn'],
		'no-useless-call': ['warn'],
		// 'no-useless-catch': ['warn'],
		'no-useless-concat': ['warn'],
		// 'no-useless-return': ['warn'],
		'no-useless-escape': ['warn'],
		'no-void': ['error'],
		'no-with': ['error'],
		'prefer-regex-literals': ['error'],
		'require-await': ['warn'],
		'yoda': ['warn', 'never', {
			'exceptRange': true,
		}],
		'prefer-promise-reject-errors': ['warn'],
		'wrap-iife': ['error', 'inside'],
		'no-undefined': ['error'],
		'no-use-before-define': ['error'],



		// stylistic
		'brace-style': ['error', '1tbs', {
			'allowSingleLine': true,
		}],
		'comma-spacing': ['warn', {
			'before': false,
			'after': true,
		}],
		'consistent-this': ['error', 'context'],
		'func-call-spacing': ['error', 'never'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true,
		}],
		'keyword-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'max-params': ['warn', 6],
		'no-bitwise': ['error'],
		'no-mixed-operators': ['error'],
		'no-multi-assign': ['warn'],
		'no-new-object': ['error'],
		'no-trailing-spaces': ['warn', {
			'skipBlankLines': true,
			'ignoreComments': true,
		}],
		'no-whitespace-before-property': ['error'],
		'nonblock-statement-body-position': ['error', 'beside'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'prefer-exponentiation-operator': ['warn'],
		'prefer-object-spread': ['warn'],
		'no-extra-semi': ['error'],

		// 'semi-style': ['error', 'last'],
		'semi-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		'semi': ['warn', 'always', {
			'omitLastInOneLineBlock': true,
		}],

		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': 'off', // warn ?
		'space-infix-ops': ['warn'],
		'space-unary-ops': ['error', {
			'words': true,
			'nonwords': false,
		}],
		'spaced-comment': ['warn', 'always'],
		'switch-colon-spacing': ['error', {
			'after': true,
			'before': false,
		}],
		'template-tag-spacing': ['error', 'never'],

		// ES6
		'arrow-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'generator-star-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		'no-confusing-arrow': ['error', {
			'allowParens': true,
		}],
		'no-duplicate-imports': ['warn'],
		'prefer-template': ['warn'],
		'rest-spread-spacing': ['error', 'never'],


	},
}
