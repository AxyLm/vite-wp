export interface Blogs {
  title: string;
  postId: number;
  date: string;
  excerpt: string;
  slug: string;
}

export interface Blog extends Blogs {
  content: string;
}
