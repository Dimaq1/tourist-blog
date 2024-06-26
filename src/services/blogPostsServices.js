const API = 'https://65c67e3be5b94dfca2e19b59.mockapi.io/tourist-blog/blog-posts'

export const getBlogPosts = async () => {
  const response = await fetch(API);
  const blogPosts = await response.json();
  return blogPosts;
}
export const getBlogPost = async (id) => {
  const response = await fetch(`${API}/${id}`);
  const blogPost = await response.json();
  return blogPost;
}

