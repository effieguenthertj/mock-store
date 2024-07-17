import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()]
        }
    },
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: './styles/tailwind.css',
            output: {
                dir: 'assets',
                assetFileNames: 'styles.css',
            }
        }
    }
})