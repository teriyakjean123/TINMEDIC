import posts from "../content/index";

export const getAllPosts = () => {
  return Object.values(posts);
};

export const getPostBySlug = (slug: string) => {
  return posts[slug];
};
