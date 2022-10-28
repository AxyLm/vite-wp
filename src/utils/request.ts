import axios from 'axios';

export const request = (query: string, variables?: object) => {
  return axios(import.meta.env.VITE_WP_BASEURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    // timeout: 1000 * 6,
    method: 'POST',
    data: JSON.stringify({
      query: query,
      variables,
    }),
    // pick:['data']
  }).then((res) => res.data);
};

export const getAllBlogs = () => {
  return request(`query AllPosts {
      posts(first: 15, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            postId
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }`);
};

export const getAllBlogIds = () => {
  return request(`query AllPosts {
      posts(first: 15, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            postId
          }
        }
      }
    }`);
};

export const getBlogById = (id: string) => {
  return request(`
  {
    post( id: "${id}" idType: DATABASE_ID){
      id
      databaseId
      title
      content
    }
  }`);
};
