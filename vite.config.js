import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'
import shopify from 'vite-plugin-shopify'
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
    plugins: [
        vue(),
        dynamicImport(),
        shopify({
            themeRoot: './', // shopify theme directory
            sourceCodeDir: 'scripts', // all the JS and utilities
            entrypointsDir: 'scripts/instances', // all the instances of Vue applications
            snippetFile: 'vite-tag.liquid', // snippet that loads all of the Vue/JS into shopify files
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()]
        }
    },
    resolve: {
        alias: {
            vue: 'https://unpkg.com/vue@3/dist/vue.esm-browser.js',
            '@instances': path.resolve(__dirname, './scripts/instances'),
            '@components': path.resolve(__dirname, './scripts/components'),
            '@objects': path.resolve(__dirname, './scripts/objects'),
        },
        extensions: ['.vue', '.mjs', '.js', '.json'],
    },
    build: {
        emptyOutDir: false,
        rollupOptions: {
            output: {
                assetFileNames: 'styles.css',
                entryFileNames: '[name].js',
            }
        }
    }
})