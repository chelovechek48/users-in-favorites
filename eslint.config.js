import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginImportAliases from 'eslint-plugin-import';

const vars = {
	indent: 'tab',
};

export default defineConfig([
	globalIgnores(['dist/**']),
	js.configs.recommended,
	...pluginVue.configs['flat/strongly-recommended'],
	{
		plugins: {
			import: pluginImportAliases,
		},
		settings: {
			'import/resolver': {
				alias: {
					map: [
						['@', './src'],
						['@components', './src/components'],
						['@pages', './src/pages'],
						['@styles', './src/assets/styles'],
					],
					extensions: ['.js', '.vue'],
				},
			},
		},
		rules: {
			'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

			'no-console': 'warn',
			'no-trailing-spaces': 'error',

			'indent': ['error', vars.indent],
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],

			'vue/html-indent': ['error', vars.indent],
			'vue/max-attributes-per-line': ['error', { singleline: 4, multiline: 4 }],
			'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'ignore' }],
		},
	}
]);
