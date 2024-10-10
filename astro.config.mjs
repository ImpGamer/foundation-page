import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'en',
        locales: ['en','es'],
        routing: {
            prefixDefaultLocale: false
        }
    },
    vite: {
        build: {
          rollupOptions: {
            external: ['three'], // Indica a Vite que three.js es un módulo externo
          },
        },
      },
});
