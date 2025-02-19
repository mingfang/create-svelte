import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: true,
		proxy: {
			'/healthcheck': {
				target: 'http://localhost:4000'
			},
		},
	},
});
