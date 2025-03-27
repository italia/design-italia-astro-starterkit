// @ts-check
import { defineConfig } from 'astro/config';
import * as path from 'path';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@splidejs/splide/src/css/core/index' : path.resolve('node_modules/@splidejs/splide/src/css/core/index.scss'),
            },
        },
    }
});
