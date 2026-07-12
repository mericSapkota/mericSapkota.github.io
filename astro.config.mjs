// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Change this to your real domain before deploying (used by the RSS feed).
  site: 'https://0xm3r1c.dev',

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});