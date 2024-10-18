export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  date: string;
  published: boolean;
}
