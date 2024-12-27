import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginTailwind from 'eslint-plugin-tailwindcss'

export default antfu(
	{
		stylistic: false,
		plugin: [...eslintPluginTailwind.configs['flat/recommended']],
		rules: {
			'vue/block-order': [
				'error',
				{
					order: [['template', 'script'], 'style'],
				},
			],
		},
	},
	eslintPluginPrettierRecommended,
)
