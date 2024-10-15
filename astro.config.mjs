// @ts-check
import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';

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
  integrations: [mdx()]
});
