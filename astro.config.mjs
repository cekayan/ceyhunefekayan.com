// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cekayan.com',
  integrations: [sitemap()],
  // Keep old URLs from the previous site working.
  redirects: {
    '/papers': '/publications/',
    '/research': '/',
  },
});
