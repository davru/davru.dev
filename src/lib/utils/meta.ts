import type { BlogPost, MetaTag } from '@lib/models';

export const buildPostMeta = (post: BlogPost): MetaTag[] => {
  return [
    {
      property: 'og:image',
      content: `https://davru.dev/images/${post.slug}.webp`
    },
    {
      property: 'og:title',
      content: post.title
    },
    {
      property: 'og:url',
      content: `https://davru.dev/blog/${post.slug}`
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:description',
      content: post.summary
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:url',
      content: `https://davru.dev/blog/${post.slug}`
    },
    {
      property: 'twitter:domain',
      content: 'davru.dev'
    },
    {
      property: 'twitter:title',
      content: post.title
    },
    {
      property: 'twitter:description',
      content: post.summary
    },
    {
      property: 'twitter:image',
      content: `https://davru.dev/images/${post.slug}.webp`
    }
  ];
};
