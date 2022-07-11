export type Theme = 'light' | 'dark';

export interface IElement {
  readonly as?: keyof HTMLElementTagNameMap;
}

export type SiteMeta = {
  title: string,
  description?: string,
  image?: string
}

export type PaginationLink = {
  url: string;
  text?: string;
  srLabel?: string;
}

export interface IPostFrontmatter {
  title: string;
  description: string;
  publishDate?: string;
  tags?: string[];
}

export interface IPost {
  frontmatter: IPostFrontmatter;
  url: string;
}