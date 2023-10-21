import { defineConfig } from 'astro/config';

// https://astro.build/config

import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  // ...
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' }
        }
      ],
    ]
  },
});