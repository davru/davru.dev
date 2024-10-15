import type { BlogPost } from '@lib/models';
import data from '../../../public/posts.json';

export const getPosts = (): BlogPost[] => {
  return (data as unknown as BlogPost[]) ?? [];
};
