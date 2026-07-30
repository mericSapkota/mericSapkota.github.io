// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Change this to your real domain before deploying (used by the RSS feed).
  // If hosting on GitHub Pages as '<username>.github.io/0xm3r1c-portfolio',
  // set site to 'https://<username>.github.io' and uncomment the line below:
  site: "https://mericsapkota.me",
  // base: '/0xm3r1c-portfolio',

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
