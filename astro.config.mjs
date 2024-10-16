// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, envField } from 'astro/config';
import { copyButtonTransformer, removeItalic } from './shiki';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_APTABASE_KEY: envField.string({
          context: 'client',
          access: 'public'
        })
      }
    }
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      transformers: [copyButtonTransformer(), removeItalic()],
      wrap: true
    }
  }
});
