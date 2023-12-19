import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		https: false,
		host: '0.0.0.0',
		cors: true,
		fs: {
			strict: false,
			allow: ['/home/patrick/WebstormProjects/R3Vids/public'],
		},
	},
})
