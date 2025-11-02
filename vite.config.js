import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const repositoryName = '/users-in-favorites';
const setAlias = (localPath) => fileURLToPath(new URL(localPath, import.meta.url));

export default defineConfig({
	base: repositoryName,

	plugins: [
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			'@': setAlias('./src'),
			'@components': setAlias('./src/components'),
			'@pages': setAlias('./src/pages'),
			'@styles': setAlias('./src/assets/styles'),
		},
	},
});
