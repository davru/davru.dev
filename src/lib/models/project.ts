export type ProjectType = 'web' | 'design';

export interface ProjectGalleryItem {
  src: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  year: number;
  type: ProjectType;
  /** Short label for what you did, e.g. "Full-stack + design". */
  role: string;
  summary: string;
  cover: string;
  /** Optional per-project accent, used by the index hover states. */
  accent?: string;
  tags: string[];
  /** External link. Omitted for design pieces with no live site. */
  url?: string;
  abandoned?: boolean;
  gallery?: ProjectGalleryItem[];
}
