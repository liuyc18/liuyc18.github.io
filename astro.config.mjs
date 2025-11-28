// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';

// https://astro.build/config
export default defineConfig({
  site: 'https://liuyc18.github.io',
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  })],
  markdown: {
    // These apply to .md files
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
});
