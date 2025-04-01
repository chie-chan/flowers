import { request, gql } from 'graphql-request';

interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: Category[];
  };
  date?: string;
  author?: {
    node: {
      name: string;
    };
  };
  commentCount?: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

interface GraphQLResponse {
  posts: {
    nodes: Post[];
  };
}

interface CategoriesResponse {
  categories: {
    nodes: Category[];
  };
}

interface SinglePostResponse {
  post: Post;
}

interface RelatedPostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface Comment {
  id: string;
  content: string;
  author: {
    node: {
      name: string;
    };
  };
  date: string;
}

interface CommentsResponse {
  comments: {
    nodes: Comment[];
  };
}

interface SearchResponse {
  posts: {
    nodes: Post[];
  };
}

interface PaginatedPostsResponse {
  posts: {
    nodes: Post[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

interface PopularPostsResponse {
  posts: {
    nodes: Post[];
  };
}

interface RecentPostsResponse {
  posts: {
    nodes: Post[];
  };
}

const postsQuery = gql`
  query {
    posts {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

const categoriesQuery = gql`
  query {
    categories {
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`;

const singlePostQuery = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      content
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
`;

const relatedPostsQuery = gql`
  query GetRelatedPosts($categoryIds: [ID!]!, $postId: ID!) {
    posts(
      where: {
        categoryIn: $categoryIds,
        notIn: [$postId],
      },
      first: 3
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const commentsQuery = gql`
  query GetComments($postId: ID!) {
    comments(where: { contentId: $postId }) {
      nodes {
        id
        content
        author {
          node {
            name
          }
        }
        date
      }
    }
  }
`;

const searchQuery = gql`
  query SearchPosts($search: String!) {
    posts(where: { search: $search }) {
      nodes {
        id
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

const paginatedPostsQuery = gql`
  query GetPaginatedPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

const popularPostsQuery = gql`
  query GetPopularPosts {
    posts(
      where: { orderby: { field: COMMENT_COUNT, order: DESC } }
      first: 4
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        commentCount
      }
    }
  }
`;

const recentPostsQuery = gql`
  query GetRecentPosts {
    posts(
      where: { orderby: { field: DATE, order: DESC } }
      first: 3
    ) {
      nodes {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export async function getPosts(): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const data = await request<GraphQLResponse>(endpoint, postsQuery);
  return data.posts.nodes;
}

export async function getCategories(): Promise<Category[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const data = await request<CategoriesResponse>(endpoint, categoriesQuery);
  return data.categories.nodes;
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const query = gql`
    query GetPostsByCategory($slug: ID!) {
      category(id: $slug, idType: SLUG) {
        posts {
          nodes {
            id
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;
  const variables = { slug };
  const data = await request<{ category: { posts: { nodes: Post[] } } }>(endpoint, query, variables);
  return data.category.posts.nodes;
}

export async function getPost(slug: string): Promise<Post | null> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const variables = { id: slug };
  try {
    const data = await request<SinglePostResponse>(endpoint, singlePostQuery, variables);
    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getRelatedPosts(categoryIds: string[], postId: string): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const variables = {
    categoryIds,
    postId,
  };
  try {
    const data = await request<RelatedPostsResponse>(endpoint, relatedPostsQuery, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export async function getComments(postId: string): Promise<Comment[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const variables = { postId };
  try {
    const data = await request<CommentsResponse>(endpoint, commentsQuery, variables);
    return data.comments.nodes;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function searchPosts(query: string): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const variables = { search: query };
  try {
    const data = await request<SearchResponse>(endpoint, searchQuery, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

export async function getPaginatedPosts(
  first: number = 10,
  after?: string
): Promise<{
  posts: Post[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
  };
}> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  const variables = { first, after };
  try {
    const data = await request<PaginatedPostsResponse>(endpoint, paginatedPostsQuery, variables);
    return {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching paginated posts:', error);
    return {
      posts: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
    };
  }
}

export async function getPopularPosts(): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  try {
    const data = await request<PopularPostsResponse>(endpoint, popularPostsQuery);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

export async function getRecentPosts(): Promise<Post[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`;
  try {
    const data = await request<RecentPostsResponse>(endpoint, recentPostsQuery);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
} 